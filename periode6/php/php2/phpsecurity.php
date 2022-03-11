<?php
require 'vendor/autoload.php';
$dotenv = new Dotenv();
$dotenv->load(__DIR__.'/.env');

$conn = mysqli_connect($_env["server"], $_env["user"], $_env["password"], $_env["db"]);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

if(!empty($_POST["postdata"])) {
  $liqry = $conn->prepare("INSERT INTO test (postdata) VALUES (?)");
  $liqry->bind_param("s", $_POST["postdata"]);
  $liqry->execute();
}
  
if(!empty($_GET["bericht"])) {
  $myfile = fopen("phpsecurity.txt", "a");
  $txt = date("d-m-Y h:i:sa") . " : " . htmlspecialchars($_GET["bericht"]) . "<br>";
  fwrite($myfile, $txt);
  fclose($myfile);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>phpsecurity</title>
</head>

<body>
  <h2>Deel 1</h2>
  <h3>Data uit de database:</h3>
  <?php
    $sql = "SELECT id, postdata FROM test";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
      while ($row = mysqli_fetch_assoc($result)) {
        echo "id: " . $row["id"] . " - postdata: " . $row["postdata"] . "<br>";
      }
    } else {
      echo "Nog geen data aanwezig.";
    }   
  ?>
  <h3>Voeg data toe aan de database:</h3>
  <form action="phpsecurity.php" method="POST">
    <input name="postdata" type="text" placeholder="postdata">
    <input type="submit" value="toevoegen">
  </form>
  <br>
  <hr>
  <h2>Deel 2</h2>
  <h3>Berichten</h3>
  <?php 
    include 'phpsecurity.txt'; 
  ?>
  <h3>Voer een bericht in om toe te voegen aan de lijst hierboven:</h3>
  <form action="phpsecurity.php" method="GET">
    <input name="bericht" type="text" placeholder="bericht">
    <input type="submit" value="verstuur bericht">
  </form>
  <br>
  <hr>
  <h2>Deel 3</h2>
  <h3>Inlogpoging:</h3>
  <?php if (!empty($_GET["wachtwoord"])) {
    if ($_GET["wachtwoord"] == $_env["pass"]) {
      echo ("Inloggen geslaagd!");
    } else {
      echo ("Geen toegang!");
    }
  } else {
    echo ("Geen inlogpoging.");
  }
  ?>
  <!-- Form for brute-force attack -->
  <h3>Voer een wachtwoord in om mee in te loggen:</h3>
  <form action="phpsecurity.php" method="GET">
    <input name="wachtwoord" type="password" placeholder="password">
    <input type="submit" value="inloggen">
  </form>
  <br>
  
  <!-- Button to attack the form with brute-force -->
  <button onclick="bruteForce()">brute force</button>
  <script>
    let passwords = ["big","asd","conto","but","1231123",$_env["pass"]];
    let counter = 0;
    let currentPassword = "";

    function bruteForce() {
      for (i=0; i<passwords.length; i++){
        currentPassword = passwords[i];
        getText("phpsecurity.php?wachtwoord="+currentPassword, i); 
        counter++;
      }
      if (counter==passwords.length) {
        counter=0;
      }     
    }

    async function getText(file, num) {
      let myObject  = await fetch(file);
      let myText = await myObject.text();
      let find = myText.split("Inloggen geslaagd!").length-2;
      if (find>0){
        alert("password is:" + passwords[num]);
      }else{
        console.log("wachtwoord verkeerd")
      }
    }    
  </script>
</body>

</html>

<?php
mysqli_close($conn);
?>