# Inför dugga - Arrayer & Metoder

## Arrayer

Till duggan ska du kunna allmänt om hur arrayer fungerar, hur man hämtar värden från en array, hur man lagrar värden i en array och hur man kan referera till olika platser i en array via dess `index`. Index börjar alltid på 0.

```javascript
//Hämta värde ur array
var arr = [4,2,5];
arr[0]; //Hämtar första värdet: 4
arr[1]; //Hämtar andra värdet: 2
arr[2]; //Hämtar tredje värdet: 5

//Lägg till värden i array
arr[1] = "nu lägger jag till ett nytt värde på index 1 i form av en sträng";

//Vi ska även kunna loopa igenom arrayer
//Med vanlig for-loop
for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
//Med for..of loop
for(var value of arr){
    console.log(value);
}

```

Förutom att kunna läsa och modiferar värden som ovan ska du även känna till några grundläggande array-metoder och vad de gör:
* .push()
* .pop()
* .shift()
* .unshift()
* .concat()
* .sort()

* [w3schools.com | Arrays](http://www.w3schools.com/js/js_arrays.asp)
* [w3schools.com | Array Methods](http://www.w3schools.com/js/js_array_methods.asp)

## Objekt

Du ska kunna hur man hämtar, ändrar och referar till olika värden i ett objekt samt vad ett objekt är för något i javascript (se nedan).

* [w3schools.com | Objects](http://www.w3schools.com/js/js_objects.asp)

Ett objekt är en datastruktur, ett sätt att strukturera data. Objektet är strukuterat i form av en kommaseparerad lista av `name/value`-par. Denna typ av objekt brukar man kalla för **Object Literal**.

Variablerna i ett objekt kallas för **egenskaper** (**properties**). När man har en funktion i ett objekt som nedan brukar man kalla den funktionen för ett objekts **metod**.

```javascript

//Skapa objekt med curly brackets
var obj = {
    name: "Steffe",                 //Vi kan lagra strängar
    age: 105,                       //Vi kan lagra heltal
    say: function(){                //Och vi kan lagra funktioner
        console.log('WHO AM I!');
    }

}

//Vi kommer åt värdet via punktnotation.
obj.name
//Men även med att skriva på detta sätt, liknande som vi gör med en array:
obj["name"];

//Om vi har en funktion som ovan kan vi kalla på den som vi kallar på en vanlig funktion, med paranteser, fast nu bunden till ett objekt:
obj.say();

//Vi kan lagra värden i ett objekt genom enkel tilldelning som en vanlig variabel.

obj.name = "Inte Steffe";


//Vi kan loopa igenom egenskaper i ett objekt med for..of
//För varje egenskap i ett specifikt objekt, logga ut egenskapen
for (var prop of obj){
    console.log(prop);
}

//Samt kan vi komma åt själva värdena i egenskaperna på följande sätt
//För varje egenskap i objekt, skriv ut värdet på den egenskapen.
for(var prop of obj){
    //Istället för index som i en array använder vi prop för att komma åt en egenskap
    console.log(obj[prop]);
}

```
