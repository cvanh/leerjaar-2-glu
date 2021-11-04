# ussage

run ```./start.sh``` in the terminal
then run one of the examples in <a href="#examples">examples</a>

todo

php stan level 2
1 more crud functions

# examples

```
    http://127.0.0.1:8082/curse.php?
    cursecheckvalue=1&sentence=kanker+kat+tering+kaas
```
    in this example the cursecheck value is 1 this can be a value between 1-3 depending on how much filtering you want

    and in the second urlencoded parameter you can see the sentence

    there are 3 levels of cursevaluecheck
    1: words wich are incorrectly typed
    2: only correctly typed words 
    3: none

### assignment

Voor deze opdracht ga je een API maken waar je zinnen heen stuurt. Deze controleert op scheldwoorden en filtert deze uit de tekst.

De zinnen worden gefilterd op scheldwoorden. De scheldwoorden worden dan verwijderd uit de tekst en vervangen voor een alternatief. Dit alternatief kan een developer zelf opgeven.

Eisen voor het product:

Scheldwoord eisen database

    id
    Woord
    Goedgekeurd
    Gradatie scheldwoord

CRUD systeem voor woorden-beheer

API moet configuratie hebben:

    Woord vervangen door (zelf waarde invullen)
    Gradatie van scheldwoorden
    1 = Alle mogelijk scheldwoorden filteren,
    2 = Alleen goed geschreven scheldwoorden
    3 = Niet filteren

Werkwijze

Stap 1:

Maak een class schema.

Dit class schema laten goedkeuren door docent.

Stap 2:

Bouwen applicatie.

Stap 3:

Elkaar beoordelen met punten schema. Peer reviews.
Beoordeling

Overzicht van punten

Velden in het blauw zijn extra

Basis vlakken = 34 punten

EXTRA vlakken = 16 punten

Totaal 50 punten

Je hebt voor de opdracht 34 punten nodig voor een 8.

Formule:

Cijfer = ( (Aantal punten) / 34) \* 7 + 1

Mensen die boven een 10 halen, krijgen een verrassing
