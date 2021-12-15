<!DOCTYPE html>
<html lang="en">

<?php

//schrijf hier je PHP code....

//Hash

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($_POST["hashValue"])) {
        $hashed = hash('ripemd160', $_POST["hashValue"]);
        echo "<script type='text/javascript'>alert('$hashed');</script>";
    }

    //Encrypt

    if (!empty($_POST["encryptValue"])) {


        $simple_string = ($_POST)['encryptValue'];

        echo "Original String: " . $simple_string . " ";

        $ciphering = "AES-128-CTR";

        $iv_length = openssl_cipher_iv_length($ciphering);
        $options = 0;

        $encryption_iv = '1234567891011121';

        $encryption_key = "W3docs";

        $encryption = openssl_encrypt($simple_string, $ciphering, $encryption_key, $options, $encryption_iv);

        //echo "Encrypted String: " . $encryption . " \n";

        echo "<script type='text/javascript'>alert('Encrypt Code: ' + '$encryption');</script>";
    }

    //Decrypt

    if (!empty($_POST["decryptValue"])) {
        $decrypt_string = ($_POST)['decryptValue'];

        $options = 0;

        $ciphering = "AES-128-CTR";

        $decryption_iv = '1234567891011121';

        $decryption_key = "W3docs";

        $decryption = openssl_decrypt($decrypt_string, $ciphering, $decryption_key, $options, $decryption_iv);

        echo "<script type='text/javascript'>alert('Decrypt Code: ' + '$decryption');</script>";
    }

    //Escape

    if (!empty($_POST["escapeValue"])) {
        $escape = $_POST["escapeValue"];
        $message = 'You typed: \n \"' . $escape . '\"';
        echo $message;
        echo "<script type='text/javascript'>alert('$message');</script>";
    }
    if (!empty($_POST["encoding"])) {
        echo (htmlspecialchars($_POST["encode"]));
    }
}



//etc.....

?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SECURITY - OPDRACHT 1 - template</title>
</head>

<body>

    <!-- deze code is een begin, maar nog niet volledig, vul deze dus aan waar nodig!! -->

    <form id="hashing" method="post">
        <input type="text" name="hashValue">
        <input type="submit" value="hash">
    </form>
    <hr>
    <form id="encryption" method="post">
        <input type="text" name="encryptValue">
        <input type="submit" value="encrypt">
    </form>
    <hr>
    <form id="decryption" method="post">
        <input type="text" name="decryptValue">
        <input type="submit" value="decrypt">
    </form>
    <hr>
    <form method="post">
        <input type="text" name="encoding" id="encoding">
         <input type="submit" value="encode">
    </form>
    <hr>
    <form id="escaping" method="post">
        <input name="escapeValue">
        <input type="submit" value="escape">
    </form>


</body>

</html>