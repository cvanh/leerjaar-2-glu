<?php
ob_start();
include_once('functions.php');
include_once('tcpdf/tcpdf.php');
if(!empty($_POST) && $_POST['action'] == 'pdf')
{
	//print_r($_POST);
	check_empty($_POST['customer'], 'Klant naam is verplicht.');
	check_empty($_POST['in'], 'Factuurnummer is verplicht.');
	check_empty($_POST['address'], 'Adres is verplicht.');
	check_empty($_POST['name'][0], 'Voeg minimaal 1 item toe.');
	check_empty($_POST['price'][0], 'Item prijs is verplicht.');
	check_empty($_POST['qty'][0], 'Hoeveelheid van een item is verplicht.');
	$customer = htmlen($_POST['customer']);
	$address = htmlen($_POST['address']);
	$in = htmlen($_POST['in']);
	$address = nl2br($address);
	//
	$total = 0;

	// echo "<pre>";
	// var_dump($_POST);
	// exit;
	for($i = 0; $i < sizeof($_POST['name']); $i++)
	{
		$item_name[] = htmlen($_POST['name'][$i]);
		$price_check = check_numeric($_POST['price'][$i], 'Prijs moet numeriek zijn.');
		$quantity_check = check_numeric($_POST['qty'][$i], 'Hoeveelheid kan alleen hele getallen aan.');
		$price[] = $_POST['price'][$i];
		$quantity[] = $_POST['qty'][$i];
		$newKey = "tax_nr{$i}";
	
		$tax[] = $_POST[$newKey];
		$total += $_POST['price'][$i]*$_POST['qty'][$i];
	}
	//content
	$html = '
	<style>
	table, tr, td {
	padding: 15px;
	}
	</style>
	<table style="background-color: #222222; color: #fff">
	<tbody>
	<tr>
	<td><h1>Factuurnummer:<strong> #'.$in.'</strong></h1></td>
	<td align="right"><img src="logo.png" height="60px"/><br/>

	Avengerlaan 1, Grafisch Lyceum Utrecht<br/>
	Utrecht, Nederland
	<br/>
	<strong>+31-1234567890</strong> | <strong>test@glu.nl</strong>
	</td>
	
	</tr>
	</tbody>
	</table>
	';
	$html .= '
	<table>
	<tbody>
	<tr>
	<td>Invoice to<br/>
	<strong>'.$customer.'</strong>
	<br/>
	'.$address.'
	</td>
	<td align="right">
	<strong>Totaal bedrag: &euro; '.number_format($total,2).'</strong><br/>
	Tax ID: ABCDEFGHIJ12345<br/>
	Invoice Date: '.date('d-m-Y').'
	</td>
	</tr>
	</tbody>
	</table>
	';
	$html .= '
	<table>
	<thead>
	<tr style="font-weight:bold;">
	<th>Item </th>
	<th>Prijs</th>
	<th>Hoeveelheid</th>
	<th>Totaal (excl. BTW)</th>
	<th>Totaal (incl. BTW)</th>
	</tr>
	</thead>
	<tbody>';
	$total_tax_ex_low = 0;
	$total_tax_ex_high = 0;
	for($i = 0; $i <sizeof($item_name); $i++)
	{
		$each_item = $item_name[$i];
		$each_price = $price[$i];
		$each_quantity = $quantity[$i];
		$each_tax = $tax[$i];

		//Hier moeten berekeningen komen om:
		// - Totaal prijs van producten x aantallen
		// - Totaal prijs inclusief en exclusief btw
		// - Totaal prijs van alle inclusieve en exclusieve btw producten onder aan de streep optellen en berekenen.

		//EXTRA:
		//Verzendkosten erbij rekenen in HTML en PDF zetten
		//Kortingsbon in percentage of als bedrag in HTML en PDF
		// var_dump($each_tax);

		$each_total = 69;
		$each_tax = 9;// de procentuele belasting
		$each_total = $each_quantity * $each_price;
		// $each_total_tax = ($each_quantity * $each_price) / (100 + $each_tax) + (($each_quantity * $each_price) - $each_tax) ; 
		$each_total_tax = ($each_price * $each_quantity / (100 + $each_tax)) - $each_price; 


		$html .= '
		<tr>
		<td style="border-bottom: 1px solid #222">'.$each_item.'</td>
		<td style="border-bottom: 1px solid #222">&euro; '.number_format($each_price,2).'</td>
		<td style="border-bottom: 1px solid #222">'.$each_quantity.'</td>
		<td style="border-bottom: 1px solid #222">&euro; '.number_format($each_total_tax,2).' - ('.$each_tax.'%)</td>
		<td style="border-bottom: 1px solid #222">&euro; '.number_format($each_total,2).'</td>
		</tr>
		';
	}
	$html .='
	<tr align="right">
	<td colspan="5"><strong>Grand total: &euro; '.number_format($total,2).'</strong></td>
	</tr>';

	$html .='
	<tr align="right">
	<td colspan="5"><strong>Totaal 21% BTW: &euro; '.number_format($total_tax_ex_high,2).'</strong></td>
	</tr>
	';

	$html .='
	<tr align="right">
	<td colspan="5"><strong>Totaal 9% BTW: &euro; '.number_format($total_tax_ex_low,2).'</strong></td>
	</tr>
	';

	$html .='
	<tr>
	<td colspan="5">
	<h2>Dank voor uw bestelling!</h2><br/>
	<strong>Terms and conditions:<br/></strong>
	kaas kaas kaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaaskaas kaas
	</td>
	</tr>
	</tbody>
	</table>
	';
	//end content
	// create new PDF document
	$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
	// set default monospaced font
	// set margins
	$pdf->SetMargins(-1, 0, -1);
	// remove default header/footer
	$pdf->setPrintHeader(false);
	$pdf->setPrintFooter(false);
	// set auto page breaks
	$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);
	// set image scale factor
	$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
	// set default font subsetting mode
	$pdf->setFontSubsetting(true);
	// Set font
	// dejavusans is a UTF-8 Unicode font, if you only need to
	// print standard ASCII chars, you can use core fonts like
	// helvetica or times to reduce file size.
	$fontname = TCPDF_FONTS::addTTFfont('ubuntu.ttf', 'TrueTypeUnicode', '', 96);
	$fontbold = TCPDF_FONTS::addTTFfont('ubuntuB.ttf', 'TrueTypeUnicode', '', 96);
	$pdf->SetFont($fontname, '', 10);
	$pdf->AddPage();
	// Print text using writeHTMLCell()
	$pdf->writeHTMLCell(0, 0, '', '', $html, 0, 0, 0, true, '', true);
	//$pdf->Output(dirname(__FILE__).'example_001.pdf', 'F');
	$pdf_name = ''.$customer.time().'.pdf';
	//$pdf_name = 'test.pdf';
	ob_end_flush();
	$pdf->Output(dirname(__FILE__).'/invoice/'.$pdf_name.'', 'I');
	echo 'PDF saved. <a href="invoice/'.$pdf_name.'">View</a>';
}
?>