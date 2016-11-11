# Examination 2 - Food Generator

Denna examination går ut på att skapa en sida som returnerar en slumpad maträtt i stil med: [Vad fan ska jag lagat till middag](http://vadfanskajaglagatillmiddag.nu/). 

Sidan ska visa en ny slumpad maträtt varje gång man klickar på en knapp eller ett klickbart element. Det ska även finnas ett alternativ där man kan välja om man enbart vill ha vegetariska alternativ som ska visas.

## Struktur av hemsidan

Själva sidan behöver innehålla:
* En ruta med text som innehåller själva maträtten som ska visas
* En knapp eller något element som går att klicka på för att generera en ny maträtt
* En checkbox eller något element som man kryssar i för att få sidan att enbart visa vegetariska alternativ.

## Struktur av koden

Din `js`-fil behöver innehålla:
* En array eller flera olika arrayer med olika maträtter. Det kan ju vara svårt att komma på en lång array med olika maträtter så ni kan i klassen crowdsourcea den om ni vill, d.v.s. sätta ihop en lista tillsammans.
* En funktion eller flera funktioner som hämtar en slumpad maträtt från arrayen
* Funktionen ska även kunna kolla om funktionen ska returnera en rätt som är vego eller inte vego.
* En funktion som lägger till maträtten på hemsidan vid varje klick.


## Betygskriterier

För __G__ krävs det att funktionaliteten ovan fungerar. Sidan ska hämta en ny slumpad maträtt vid varje klick och visa upp den på sidan. Man ska även kunna välja om sidan enbart ska visa vegetariska alternativ.

För __VG__ krävs det att du jobbar med en array av objekt i stil med:

``````javascript
var foods = [
    { name: "Palak Paneer", veg: true, url: "http://www.manjulaskitchen.com/palak-paneer-2016/"}
];

```

För __VG__ krävs det även att du strukturerar din kod i form av funktioner. Exempel: om du ska generera en ny maträtt ska du ha en funktion som t.ex. heter `getRandomMeal()` som kallas på när du ska få fram en ny maträtt.

