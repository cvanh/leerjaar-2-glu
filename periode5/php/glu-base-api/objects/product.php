// Maak in product.php de volgende code:
<?php
include_once '../config/database.php';
include_once '../objects/product.php';

class Product extends Database
{

    // database connectie en tabel-naam
    public $conn;
    private $table_name = "product";
    // object properties
    public $id;
    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }
    // read products
    function read()
    {
        // select all query
        $query = "SELECT * FROM " . $this->table_name;
        $result = $this->conn->query($query);
        return $result;
    }
       function write($category_id,$naam,$beschrijving,$prijs,$toegevoegd_op,$gewijzigd_op){ //TODO
        $query = "
        INSERT INTO " . $this->table_name . "(`category_id`, `naam`, `beschrijving`, `prijs`, `toegevoegd_op`, `gewijzigd_op`) 
        VALUES (". $category_id . "," . $naam . "," . $beschrijving . ",". $prijs . ",". $toegevoegd_op.",". $gewijzigd_op . ") " ;
        echo($query);
        $result = $this->conn->query($query);
        // return $result;
       }
       function update($collum,$value,$id){ 
        $query = "UPDATE " . $this->table_name . " SET " . $collum . " = " ."'". $value ."'". "WHERE id = ". $id ;
        $result = $this->conn->query($query);
        return $result;
       }
    function delete($id)
    { 
        $query = "DELETE FROM " . $this->table_name . " WHERE id=" . $id;
        echo $query;
        $this->conn->query($query);
        //echo $this->conn->error;
    }
}

echo "<pre>";
$database = new Database();
$db = $database->getConnection();
// initialize object
// $product = new Product($db);
// read products will be here

$Product = new Product($db);
var_dump($Product);
// $Product->read();
$Product->write('2','naam','beschrijving','3','2019','2020');
// $Product->update('naam','remcola','2');

// $Product->delete(3);
?>