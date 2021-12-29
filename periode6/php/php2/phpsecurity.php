<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "phpsecurity";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

if (!empty($_POST["postdata"])) {
  $sql = "INSERT INTO test (postdata) VALUES ('" . $_POST["postdata"] . "')";

  if (!mysqli_query($conn, $sql)) {
    die("Error: " . $sql . "<br>" . mysqli_error($conn));
  }
}

if (!empty($_GET["bericht"])) {
  $myfile = fopen("phpsecurity.txt", "a");
  $txt = date("d-m-Y h:i:sa") . " : " . $_GET["bericht"] . "<br>";
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
  <?php include 'phpsecurity.txt'; ?>
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
    if ($_GET["wachtwoord"] == "wachtwoord") {
      echo ("Inloggen geslaagd!");
    } else {
      echo ("Geen toegang!");
    }
  } else {
    echo ("Geen inlogpoging.");
  }
  ?>
  <h3>Voer een wachtwoord in om mee in te loggen:</h3>
  <form action="phpsecurity.php" method="GET">
    <input name="wachtwoord" type="password" placeholder="password">
    <input type="submit" value="inloggen">
  </form>
  <br>
  
  <button onclick="bruteForce()">brute force</button>
  <script>
  /*
    let passwords = ["123","abc","wachtwoord"];
    let counter = 0;
    let currentPassword = "";
    function bruteForce() {
      currentPassword = passwords[counter];
      getText("phpsecurity.php?wachtwoord="+currentPassword); 
      counter++;
      if (counter==passwords.length) 
      {
        counter=0;
      }     
    }
    async function getText(file) {
      let myObject  = await fetch(file);
      let myText = await myObject.text();
      let find = myText.split("Inloggen geslaagd!").length-2;
      if (find>0)
      {
        alert("password is:" + currentPassword);
      }
    }
    */
  </script>
</body>

</html>

<?php
mysqli_close($conn);
?>