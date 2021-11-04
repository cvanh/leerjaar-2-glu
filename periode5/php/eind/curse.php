<?php

/**
 * class with all the functions for cursecheck
 */
class Curse
{
    protected int $CurseBump;
    /**
     * @function _construct
     * @param $Sentence string ,
     */
    function __construct(
        $Sentence,
        $CursewordsList,
        $CurseBump
    ) {
        $this->CurseCheck($Sentence, $CursewordsList, $CurseBump);
    }
    /**
     * @param 
     */
    private function CurseCheck($Sentence, $CursewordsList, $CurseBump)
    {
        $Words = $this->SplitSentence($Sentence);
        $good = "BleeP";

        // due to limitations of php we need to check the value less compact
        switch ($CurseBump) {
            case 1:
                echo "a";
                // 1 = Alle mogelijk scheldwoorden filteren,  
                $t = $this->FilterSentence($Sentence);
                echo str_ireplace($CursewordsList, $good, $t);
                break;
            case 2:
                echo "b";
                //     2 = Alleen goed geschreven scheldwoorden 
                echo str_replace($CursewordsList, $good, $Sentence);

                break;

            case 3:
                echo $Sentence;
                //     3 = Niet filteren 


                break;
            default:
                echo "no valid cursechecklevel found please provide one in the url";
        }
        
    }

    private function SplitSentence($Sentence)
    {
        $Words = explode(" ", $Sentence);
        // var_dump($Words);
        return $Words;
    }

    private function FilterSentence($Sentence)
    {
        return strtolower($Sentence);
    }
}

$Sentence = "de KaNker poes springt uit de kut boom met zijn tering pootjes";
$CursewordsList = ["kanker", "kaas", "kut", "tering"];
$CurseBump = $_GET["cursecheckvalue"];

$lihfds = new Curse($Sentence, $CursewordsList, $CurseBump);
