# simple sql api

# setting it up
#### prerequisiti
node.js (testing it on v14.17.5)
npm 
brains 
eyes
heartbeat

the first step is to open a shell in this folder
1. run `npm i`
2. run `node server.js`
3. test it with <a href="#curl">with one of the curl commands</a>

### todo's
[] support empty responses
[] suport the correct http codes(200,204, 400, 404)
[] move the db connect stuff to a seprate .env file
[] in the url in should specify wich table it should work in

[] change from @vlasky/mysql to mysqljs/mysql (but wont at this time(2021-10-17) due to no mysql 8 support)

# assignment
In de vorige opdracht (en klassikaal) heb je de basis API opgezet waarmee het volgende mogelijk is:

Middels een url (http://localhost/api2/product/read_all.php) kun je alle producten uitlezen uit de aangemaakte en gevulde database

Aan jou nu de taak om deze startup code uit te breiden met het volgende:

    [x] Specifiek product uit een database-tabel halen

    [] Een product toevoegen aan een database-tabel

    [] Een product updaten in een database-tabel

    [] Een product verwijderen uit een database-tabel

Dit mag door middel van parameters aan de API-URL mee te sturen, maar als je jezelf wilt uitdagen dan is het mooi als er een CMS is met een formulier die de data naar de API stuurt, en een respons op het scherm weergeeft.

###<a id='curl'></a> testing curls url endpoints

updating something:
`curl -X POST localhost:8082/update -H "Content-Type": "application/json" -d '{"id":9,"row":"naam","value":"kaas"}'`

delete from X, x being the value of id
`curl localhost:8082/delete/product/X`