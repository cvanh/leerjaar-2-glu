    
<?php

// Require composer autoloader
require __DIR__ . '/vendor/autoload.php';

// Create Router instance
$router = new \Bramus\Router\Router();

// echo('a');

// Define routes
// ...
$router->get('/', function() {
    echo '<h1>standaard</h1>';
});

$router->get('/testpagina', function() {
    echo '<h1>testpagina</h1>';
});

$router->get('/foto/(\d+)', function($id) {

    switch($id){
        case 1:
            echo('<img src="https://media.discordapp.net/attachments/783234677048999956/895029077264707614/unknown.png?width=824&height=464">');
            break;

        case 2:
            echo('<img src="https://media.discordapp.net/attachments/783234677048999956/895034202381246525/unknown.png?width=557&height=464">');
            break;
        
        case 3:
            echo('<img src="https://media.discordapp.net/attachments/783234677048999956/895295068796231730/unknown.png">');
            break;

        case 4:
            echo('<img src="https://media.discordapp.net/attachments/783234677048999956/895603817863860254/unknown.png?width=360&height=464">');
            break;

        default:
        header('HTTP/1.1 404 Not Found');
        echo('a');

    }
});
$router->get('/blog/(\d+)', function($name) {
        echo('nummer van het artikel is: ' . $name);
});
$router->post('/login', function() {
echo $_POST;
    // if($_POST){
//     var_dump($_POST);
// } else {
//     echo(`
//     <form method='POST'>
//     <label for="fname">First name:</label><br>
//     <input type="text" id="fname" name="fname"><br>
//     <label for="lname">Last name:</label><br>
//     <input type="text" id="lname" name="lname">
//     </form> 
//     `);
// }

});

// Run it!
$router->run();