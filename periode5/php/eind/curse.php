<?php
class Curse {
    protected int $CurseBump;
    function __construct(
        $Sentence,
        $CursewordsList,
        $CurseBump
        ){
        $this->CurseCheck($Sentence,$CursewordsList,$CurseBump);
    }
    private function CurseCheck($Sentence,$CursewordsList,$CurseBump) {
        $Words = $this->SplitSentence($Sentence);
        $good = "bleep";
        echo str_ireplace($CursewordsList,$good,$Sentence);
    }
    // 3
    private function SplitSentence($Sentence){
        $t = $this->FilterSentence($Sentence);
        $Words = explode(" ", $t);
        // var_dump($Words);
        return $Words;
    }
    private function FilterSentence($Sentence){
        return strtolower($Sentence);        
    }
}

$Sentence = "de KaNker poes springt uit de kut boom met zijn tering pootjes";
$CursewordsList = ["kanker", "kaas","kut"];
$CurseBump = 70;

$lihfds = new Curse($Sentence,$CursewordsList,$CurseBump);
