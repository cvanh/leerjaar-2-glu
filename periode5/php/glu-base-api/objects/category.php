// Maak in category.php de volgende code:
<?php
include_once '../config/database.php';
include_once '../objects/category.php';

class category extends Database
{

    // database connectie en tabel-naam
    public $conn;
    private $table_name = "category";
    // object properties
    public $id;
    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }
    // read categorys
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
        VALUES (". $category_id . "," 
        .'"'. $naam .'"'. ","
        .'"'. $beschrijving . '"'. ","
        . $prijs . ","
        .'"'. $toegevoegd_op.'"'.","
        .'"'. $gewijzigd_op .'"'. ") " ;
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
// $category = new category($db);
// read categorys will be here

$category = new category($db);
var_dump($category);
// $category->read();
// $category->write('2','naam','beschrijving','3','2021-09-21 19:00:00','2021-09-22 19:50:58');
// $category->update('naam','remcola','2');

// $category->delete(3);
?>