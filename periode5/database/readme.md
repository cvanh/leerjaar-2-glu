# introduction
this is a simple cms for a libary, when logging on the main page please fill just something in this doesnt matter.
you may ask why? well good question i dont have crazy amounts of adderall so i cant work really long.

# set up
0. `cd server`
1. `npm i`
2. create .env in the folder server with the following contents:
`
DB_URL=mongodb+srv://<username>:<password>@cluster0.d5rr0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
gmailusername=
gmailpassword=
`
fill password and username with the 3 letter name of my school, for the other fields use your gmail acount or send me a message for a test acount.
3. create a cron job for borrowcheck.js
4. run main.js

the client can be server staticly

# questions? 
contact me on teams or discord `أكبر ذيب#7092`



# api endpoints

/auth type:post
/addbook type:post
/getbookdata/:value type:get
/editbook type:post
/borrow type:post
/return type:post

# the goal of this assaignment please note this is for personel use

In deze opdracht is het de bedoeling om je database kennis weer op te frissen na de lange zomervakantie.

Je gaat een database systeem maken voor een bibliotheek waarmee boeken uitgeleend en ingeleverd kunnen worden door leden.
De case:

Een kleine lokale bibliotheek in Utrecht (het boekenarchief)  wil met de tijd meegaan en een digitaal uitleen/inlever systeem laten maken voor leden.

Iemand kan pas een boek lenen als hij lid is van dit systeem, en is ingelogd
Het bibliotheek-lid moet dus bestaan in de database, bestaat het bibliotheek-lid nog niet dan moet hij/zij zich kunnen registreren

Het bibliotheek-archief bestaat uit 400 boeken, welke je in de database kunt laden middels deze excel

Een uitleen van een boek moet worden geregistreerd in de database

Een boek kan maar 1 keer worden uitgeleend

Een boek mag maximaal 4 weken uitgeleend worden, daarna moet er een e-mail naar het bibliotheek-lid gestuurd worden

 
Wat moet er gemaakt worden?

a. Bedenk welke database-gegevens je nodig hebt voor:

  - Bibliotheek leden gegevens

  - Boeken gegevens

  - Inlever/uitleen gegevens

 

b.Zet de database op

c. Maak een CMS-pagina waarmee boeken kunnen worden toegevoegdxxxxxxxx

d.Maak een CMS-pagina waarmee boeken kunnen worden gewijzigdxxxxxxxxxx

e.Maak een pagina waarmee een boek kan worden uitgeleend obv isbn-nummer (mits het boek nog niet is uitgeleend)
   een bibliotheek-lid moet hiervoor ingelogd zijn

f.Maak een pagina waarmee een boek kan worden ingeleverd obv isbn-nummerx
   een bibliotheek-lid moet hiervoor ingelogd zijn

 
Bonus punten

    zet het gehele systeem online 
    zorg voor mooie styling

 
Verdieping

Wil je jezelf uitdagen?

Voeg een QR-code scanner / Barcode scanner toe waarmee je een ISBN nummer kunt uitlezen en zo makkelijk een boek kunt uitlenen / inleveren


users 

{
   "id": 
   "permission": 
}
list of permissions
superuser(0)
is allowed todo anything

admin(1)
is allowed to:
add book
bookrental
editbook


user(2)