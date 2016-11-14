# Övningar - DOM-manipulation

* [w3schools.com | HTML DOM Tutorial](http://www.w3schools.com/js/js_htmldom.asp)

Skapa en ny mapp med en `index.html`-fil samt en `main.js`-fil (eller vad du vill döpa filerna till, välj själv). Klistra in följande html i `index.html`. Du ska sedan hitta och ändra olika element med hjälp av JavaScript i `main.js`.

Du har följande kod att jobba med:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sidan min</title>
</head>
<body>
<!-- En article är som en div fast den berättar mer om innehållet och brukar bestå av en heading (<h1> i det här fallet) följt av text (<p> samt <ul> i det här fallet) -->
<article>
    <h1>En rubrik här</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat temporibus quam pariatur, quas qui possimus minima, deleniti culpa optio odit quibusdam at placeat sunt ut iste sed. Eius, incidunt, nostrum!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime adipisci rem, illo ipsum officiis, nesciunt natus error voluptatibus consectetur voluptates exercitationem enim assumenda quasi deserunt dolorum. Ea veritatis, harum excepturi!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos sed, laboriosam non odit quae temporibus perferendis obcaecati modi aliquid voluptatem, accusamus eaque iste explicabo facilis repellendus, aliquam voluptate, reiciendis quisquam.</p>
    <!-- Unordered List: lista utan siffor framför -->
    <ul class="myList">
        <!-- List Item -->
        <li id="item">A</li>
        <li>B</li>
        <li>C</li>
        <li>
            <!-- Man kan ha en <ul> i en annan <ul> -->
            <ul class="myList">
                <li>INNER A</li>
                <li>INNER B</li>
                <li>INNER C</li>
            </ul>
        </li>
        <li>D</li>
        <!-- Kom ihåg att stänga alla taggar -->
    </ul>
</article>
</body>
</html>
```


## Övning 1 - Hämta element

Du ska hämta ut ett antal element och spara dem i variabler i din `js`-fil. Du ska sedan ändra innehållet i dessa element. Metoderna för att hämta element är de vi använt och gått igenom tidigare (getElementById t.ex.) För att se om du har lyckats hämta ut rätt element kan du `console.logga` variablen.

1. Hämta ut det element på sidan som har id `item`.
2. Hämta ut alla `<p>`-element.
3. Hämta ut det första `<p>`-elementet.
4. Hämta ut det sista `<p>`-elementet.
5. Hämta ut alla element med klassen `myList`.
6. Hämta ut alla children av klassen `myList` med hjälp av `.children`.
7. Hämta ut föräldern till alla `<p>` med hjälp av `.parentElement`.


## Övning 2 - Ändra element

1. Ändra så att det sista `<p>`-elementet har en annan färg på texten än de andra `<p>`-elementen.
2. Ändra så att alla `<li>` har en större `font-size`.
3. Ändra rubriken i `<h1>` till något annat än "En rubrik här".
4. Ändra bakgrundsfärgen på `.parentElement()` till `<p>`.
5. Ta bort det första `<p>`-elementet med hjälp av `parent.removeChild()`.

## Övning 3 - Events

* [w3schools.com | EventListeners](http://www.w3schools.com/jsref/met_element_addeventlistener.asp)

Man kan referar till det man klickar på genom `.this`. När man lägger till en event listener på ett element så vet koden vilket element som har blivit klickat. Vi kan kolla det genom att binda en funktion till en rad olika element. Vi kan använda html-koden ovan för att ge ett exempel på det här.

```js
//Hämtar ut alla list items
var listItems = document.getElementsByTagName("li");

//Loopar igenom alla element av typen li. 
for(var i = 0; i < listItems.length; i++){
    //För varje element, lägg till en klick-eventlistener.
    //Funktionen som ska köras är att logga ut vad som finns
    //inuti list itemet.
    listItems[i].addEventListener("click", function(){
        console.log(this.innerHTML);
        })
}

```

Kör koden ovan och klicka på varje `<li>`-element. Använd koden ovan för att lösa följande uppgifter:

1. `Console.logga` istället ut parent till varje element som klickas på.
2. `Console.logga` ut alla children till varje element som klickas på.
3. Gör så att klick-funktionen tar bort varje element som du klickar på.
4. Refaktorera koden så att du inte skapar en anonym funktion utan istället tilldelar en funktion som du skapat tidigare: 
```js
//När du lägger till event listener borde det istället se ut på detta sätt
listItems[i].addEventListener("click", myClickFunction);
```
