# Extraövningar

## Övningar

Här har jag lagt in ett antal övningar som man kan försöka lösa. Det är lite blandade övningar med allt från att skapa funktioner till mer läsförståelse, det är ingen direkt ordning på dem i form av lättast till svårast utan här får man köra på som man vill :sunglasses: Om det finns tid så lägger jag till fler övningar annars kan ni se över länkarna i README.

### Övning 1: Funktioner/stränghantering

Skriv en funktion som tar in en sträng och kollar om det är en palindrom. En palindrom är ett ord eller en fras som är densamma baklänges som framlänges, t.ex. namnet Anna. Det finns flera olika lösningar på denna, du får används inbyggda funktioner eller lösa det själv med loopar etc.

```bash
Example Input : 'anna' 
Expected Output : true

Example Input : 'paris' 
Expected Output : false
```

### Övning 2: Funktioner/stränghantering

Skriv en funktion som tar in en sträng och konverterar den första bokstaven i varje nytt ord till stor bokstav. Se över vilka sträng-funktioner som finns tillgängliga i JavaScript och hur du kan använda dem.

```bash
Example Input : 'the quick brown fox' 
Expected Output : 'The Quick Brown Fox '
```

### Övning 3: Följa kod

Vad skrivs ut i `console` när koden nedan har körts?

```javascript
var arr = [1,2, "monkey", "gorilla", 5, 6];
var foo = arr.slice(2,4);
console.log(foo);

```

### Övning 4: Följa kod

Vad skrivs ut i `console` när koden nedan har körts?

```javascript
var arr = ["gris", "ko", "hund", "val", "zebra", "apa"];
var j = arr.length;
for(var i = 0; i < j; i++)
{
   console.log(arr[i].substring(0,1));
}

```

### Övning 5: Följa kod

Vad skrivs ut i `console` när koden nedan har körts?

```js
var x = 0;
var arr = [1, 3, 2, 7, 8, 5, 3, 4];
for(var i in arr)
{
   if(i > 3)
      x+= arr[i];
}
console.log(x);
```

### Övning 6: Funktioner/stränghantering

Skriv en funktion som tar in en sträng och returnerar det längst ordet i strängen. Här kan man använda t.ex. [string.split()](http://www.w3schools.com/jsref/jsref_split.asp) 

```bash
Example Input : 'Front End Development' 
Expected Output : 'Development'
```

### Övning 7: Funktioner/stränghantering

Skriv en funktion som tar in en sträng och returnerar antalet vokaler som finns i strängen.

```bash
Example Input : 'The quick brown fox' 
Expected Output : 5
```

### Övning 8: Quiz med objekt och prototyper!

Det vi ska göra är att bygga ett **quiz** med hjälp av constructorer och prototyper.

Quizet ska fråga en serie av frågor och när användaren svarar ska programmet hålla koll på poängen. När alla frågor är slut ska användaren få veta hur många rätt användaren fick.

Du kan dela upp projektet i två olika objekt: `Quiz` och `Question` som du skapar med hjälp av constructorer.

#### Systemets specifikationer

##### Quiz
Ett quiz är liknande som en playlist. En playlist innehåller en kollektion av låtar och ett quiz innehåller en kollektion av frågor. Ditt quiz bör som minimum innehålla:

* Poäng
* Vilken fråga användaren för tillfället är på.
* Själva frågorna.
* En funktion som tar in användarens svar och jämför det med frågan.

##### Question
En question är en fråga och en kollektion av frågor skapar tillsammans ett quiz. En fråga bör som minimum bestå av:

* En fråga i form av text
* Ett svar
* (Kanske till och med en samling svarsalternativ? Välj själv!)

Tänk på att bygga det med fokus på objekt, vilket betyder att du ska använda dig av constructors och prototyper. Hur du väljer att göra detta är upp till dig. Tänk på hur du gjorde playlist-uppgiften.
