# simple sql api
DEAR teacher please have constructive feedback
# setting it up
#### prerequisiti
- you will need the following:
- node.js (testing it on v14.17.5)
- npm 
- brains 
- eyes
- a heartbeat(can use a external one)

the first step is to open a shell in this folder
1. run `npm i`
2. run `node server.js`
3. test it with <a href="#curl">with one of the curl commands</a>


## how stuff works



### todo's
[partialy] support empty responses
[partaly] suport the correct http codes(200,204, 400, 404)
[yes] move the db connect stuff to a seprate .env file
[] move the db connect to a sepreate class
[] in the url in should specify wich table it should work in `"fuck this' - signed @cvanh`

[eh] change from [@vlasky/mysql](https://github.com/vlasky/mysql) to [mysqljs/mysql](https://github.com/mysqljs/mysql) (but wont at this time(2021-10-17) due to no mysql 8 support)

# assignment
In de vorige opdracht (en klassikaal) heb je de basis API opgezet waarmee het volgende mogelijk is:

Middels een url (http://localhost/api2/product/read_all.php) kun je alle producten uitlezen uit de aangemaakte en gevulde database

Aan jou nu de taak om deze startup code uit te breiden met het volgende:

    [yes] Specifiek product uit een database-tabel halen

    [yes] Een product toevoegen aan een database-tabel

    [yes] Een product updaten in een database-tabel

    [yes] Een product verwijderen uit een database-tabel

    [] REFACTOR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11

Dit mag door middel van parameters aan de API-URL mee te sturen, maar als je jezelf wilt uitdagen dan is het mooi als er een CMS is met een formulier die de data naar de API stuurt, en een respons op het scherm weergeeft.

#### opdracht 3


Een mooie manier om te controleren of een gebruiker (mens of computer) jouw API mag gebruiken is door een toegangscontrole toe te passen. Hiervoor wordt gebruik gemaakt van een extra tabel waarin een apikey en een gebruiker in wordt opgeslagen. Hierdoor is het mogelijk om specifieke gebruikers toegang te geven en ook weer te af te pakken. We beginnen met het controleren of de apikey klopt. Daarvoor moeten we eerst een nieuwe tabel toevoegen. De tabel heet access en heeft drie kolommen: id, apikey en user.

db access table

Voer (minstens) twee records in en gebruik voor apikey een MD5-hash van een woord. Er zijn voldoende websites te vinden die dit voor jou kunnen doen.

Net zoals bij product maken we voor access ook de benodigde bestanden aan. Breid de structuur uit:

├─── objects/
├────── access.php - contains properties and methods for "access" database queries.
├─── access/
├────── access_test.php - file that will test whether the class is working correctly.

In access.php maak je de class aan naar het voorbeeld van product. Lees de code goed en probeer deze te begrijpen!

// maak in access.php de volgende code:
{hier staat orgineele code van de elo}

Om na te gaan of deze class werkt, maak je een test-functie. Zo'n test-functie is eigenlijk een unittest. Je maakt een nieuw bestand in de map access en noemt die access_test.php. Zie onderstaande code.

// maak in access_test.php de volgende code:
{hier staat orgineele code van de elo}

De volgende stap is het toevoegen van de controle aan de API. Hoe zou jij dat doen?

En de stap daarna is het controleren op zowel de apikey als de user.


### extra bs voor opdracht 2 bc of f
Wat zijn de eisen voor het inleveren van de opdracht API?
- Je stuurt een e-mail aan Jan van Os en verwerkt daarin de volgende onderdelen:
- Je voegt een URL toe voor het "toevoegen van een product".
- Je voegt een URL toe voor het "updaten van een product".
- Je voegt een URL toe voor het "verwijderen van een product".
- Je voegt een URL toe waarin een dump te zien is van de productentabel.
- Je voegt als eerste product van de productentabel je eigen naam toe.
- Je voegt een URL toe van het GITHUB account waar de API te vinden is.
- Je voegt een URL toe van jouw GLUWEB (of alternatief) waar de API op draait en werkend te zien is.

###<a id='curl'></a> testing curls url endpoints

auth: get token on id basis
`curl -X POST localhost:8082/auth/AuthGetUserToken -d '{"username":"pieter","password":"klein"}' -H "Content-Type: application/json"`

then you will get a base64 encoded response as seen here:
`dJq1xIyxfKE1WT0+k53+/WRTmHEW90IDuonDqba8efIHqpLtg0b9rs+jAuXtSiCkIWBhhQZYA4dPaqSpT06sQ6BE54MNqyG+cvmIzcfNUosrVvBxs2Xk8r/84+3ym/wcn5QcUexQQBsKNQCQJ0ORuOBhFHLSeCyzv6xopRRcpcMTTaM2NwaNc/Itr3nrA5GryV16FHiclsf0WX38AFlhNrlYDbZqhSLY2EzN4h4DzobvGWsdbBzlzHP5H4gPWH1EMFnAt7EBMbFCO/KA9ncWLm80caFmGqm2v2WTUny6pN0tFfe8S+kf2mlfokpPv+Ix1dBpJLK6G/21R1Dv1CHYzA==`

auth: add user
`curl -X POST localhost:8082/auth/adduser -H "Content-Type: application/json" -d '{"username":"joost","password":"PuppYLOver2021"}' -H "token:TOKEN"`


create 
`curl -X POST localhost:8082/add -H "Content-Type: application/json" -d '{"category_id":"1","gewijzigd_op" : "2008-11-11 13:23:44","toegevoegd_op" : "2008-11-11 13:23:44","prijs": "2","beschrijving" : "3","naam" : "4"}'`

read 
`curl localhost:8082/read/ID -H "token:TOKEN"`

updating something:
`curl -X POST localhost:8082/update -H "Content-Type: application/json" -d '{"row":"prijs","value":"9.00","id":"1"}'`

delete from X, x being the value of id
`curl localhost:8082/delete/product/X`

