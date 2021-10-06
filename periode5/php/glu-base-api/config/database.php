<?php
require("env.php");
class Database extends env
{
   
   // Database instellingen
   // private $host = "localhost";
   // private $db_name = "apiopdracht";
   // private $username = "root";
   // private $password = "123456";
   private $conn;
   public function getConnection()
   {
      $this->conn = null;
      try {
         $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);
      } catch (Exception $e) {
         echo "Fout tijdens verbinden: " . $e->getMessage();
      }
      return $this->conn;
   }
}
