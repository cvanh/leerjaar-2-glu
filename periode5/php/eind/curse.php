<?php

/**
 * Curse
 */
class Curse
{
    protected int $CurseBump; 
    private $CursewordsList = [];
    /**
     * __construct
     */
    function __construct(
        $Sentence,
        $CursewordsList,
        $CurseBump
    ) {
        $CursewordsList = ["kanker","kut","tyfus"];

        $this->CurseCheck($Sentence, $CursewordsList, $CurseBump);
        // $CursewordsList = $this->GetCurseWords();
        var_dump($this->CursewordsList);
    }    
    /**
     * CurseCheck
     *
     * @param  array $Sentence
     * @param  array $CursewordsList
     * @param  int $CurseBump
     */
    private function CurseCheck($Sentence, $CursewordsList, $CurseBump)
    {
        $Words = $this->SplitSentence($Sentence);
        $good = "BleeP";

        switch ($CurseBump) {
            case '1':
                // 1 = Alle mogelijk scheldwoorden filteren,  
                $t = $this->FilterSentence($Sentence);
                echo str_ireplace($CursewordsList, $good, $t);
                break;
            case '2':
                //     2 = Alleen goed geschreven scheldwoorden 
                echo str_replace($CursewordsList, $good, $Sentence);

                break;

            case '3':
                echo $Sentence;
                //     3 = Niet filteren 
                break;
            default:
                echo "no valid cursechecklevel found please provide one in the url";
        }
        
    }
    
    /**
     * SplitSentence
     *
     * @param  mixed $Sentence
     * @return void
     */
    private function SplitSentence($Sentence)
    {
        $Words = explode(" ", $Sentence);
        return $Words;
    }
    
    /**
     * FilterSentence
     *
     * @param  mixed $Sentence
     * @return array sentence in a array with all the words in seprate cases
     */
    private function FilterSentence($Sentence)
    {
        return strtolower($Sentence);
    }
    /**
     * GetCurseWords
     */
    private function GetCurseWords() // todo move this shit in a other function but fuckit
    {
        $servername = "localhost";
        $username = "kaas";
        $password = "kaas";
        $dbname = "apiopdracht";
        
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // var_dump($conn);
        // Check connection
        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
        }
        
        $sql = "SELECT word FROM `cursewords`";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
          // output data of each row
          while($row = $result->fetch_assoc()) {
            echo $row["word"];
            echo "<br>";
          }
        } else {
        //   var_dump($result);
          echo "0 results";
        }
        $conn->close();
    }
    /** 
     * DBinsert
     */
    public function DBinsert($word,$serverity){ 
        $servername = "localhost";
        $username = "kaas";
        $password = "kaas";
        $dbname = "apiopdracht";
        
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
        }
        
        $sql = "INSERT INTO `cursewords` (`id`, `word`, `severity`, `aproved`) VALUES (NULL, '${word}', '${serverity}', '1');";
        var_dump($sql);
        $conn->query($sql);
        $conn->close();
    }
}


// get the data from the post body
$Sentence = $_GET['sentence'];
$CurseBump = $_GET["CurseBump"];

$na = new Curse($Sentence, $CursewordsList, $CurseBump);

// $na->DBinsert('bah',10);
