<?php
$val = "";
if( isset($_POST['product']) ) {
    $val = $_POST['product'];
}
$servername = "localhost";
$dbname     = "apiopdracht";
$username   = "root";
$password   = "123456";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM product";
$result = $conn->query($sql);

var_dump($result);

class Table {
    private $_rows;

    public function construct() {
        $this->_rows = array();
    }

    public function append($row) {
        $this->_rows[] = $row;
    }

    public function draw() {
        echo '<table border="1">'.PHP_EOL; // Begin van de tabel, border voor de duidelijkheid
    
        foreach($this->_rows as $row) {
            echo '<tr>'.PHP_EOL;
            
            foreach($row->getCells() as $cell) {
                echo '<td>'.$cell->getContent().'</td>'.PHP_EOL;
            }
        
            echo '</tr>'.PHP_EOL;
        }
        
        echo '</table>'.PHP_EOL; 
    }
}

class Row {
    private $_cells;

    public function construct() {
        $this->_cells = array();
    }

    public function append($cell) {
        $this->_cells[] = $cell;
    }

    public function getCells() {
        return $this->_cells;
    }
}

class Cell {
    private $_content;

    public function __construct($content) {
        $this->_content = $content;
    }

    public function getContent() {
        return $this->_content;
    }
}

$table = new Table();

$rowHeader = new Row();
$rowHeader->append(new Cell('ID'));
$rowHeader->append(new Cell('naam'));
$rowHeader->append(new Cell('beschrijving'));
$rowHeader->append(new Cell('prijs'));

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $cellId = new Cell($row['id']);
        $cellNaam = new Cell($row['naam']);
        $cellBeschrijving = new Cell($row['beschrijving']);
        $cellPrijs = new Cell($row['prijs']);

        $rowDynamic = new Row();
        $rowDynamic->append($cellId);
        $rowDynamic->append($cellNaam);
        $rowDynamic->append($cellPrijs);

        $table->append($rowDynamic);
    }
} else {
    echo "0 Results";
}

$table->draw();

$conn->close();
?>