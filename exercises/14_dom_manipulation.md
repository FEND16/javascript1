# Events

Det blir ju kul på riktigt när man får börja interagera med sin hemsida. Vi kan på många olika sätt. Varje gång vi t.ex. klickar på ett element avfyrar vi ett **event**.

Om vi vill att något specifikt ska ske när vi klickar på ett element måste vi dock binda en EventListener till ett element där vi säger att en viss funktion ska köras när vi klickar på elementet.

För det mesta vill man använda sig utav knappar (`<button>`) för att göra detta eftersom knappar är till för att klickas på. Dock så kan man göra de flesta element klickbara genom att lägga till en *eventlistener*.

Att lägga till en funktion som lyssnar på klick kan göras på många olika sätt. Här nedan finns lite olika sätt att lösa det:

```html
<!-- I index.html -->
<!--onClick="myClick()" här kallar vi på funktionen i vår main.js -->
<button id="myButton" onClick="myClick()">Min knapp</button>

```

```js
//I vår main.js
//Vi kan definiera en click som kallas på när vi klickar
function myClick(){
    alert('Hej');
}

//Vi kan också först hämta ut själva elementet
var button = document.getElementById("myButton");

//Lägg till en onclick-funktion på elementet och detta fungerar på samma sätt
button.onclick(function(){
    alert('Hej');
})

//Vi kan även lägga till en event-listener på elementet. Detta gör samma sak.
button.addEventListener('click', function(){
    alert('Hej!');
    })
```

### Länkar

* [w3Schools - Events](http://www.w3schools.com/js/js_events.asp)
    - Olika events man kan använda
* [Eloquent JavaScript - Events](http://eloquentjavascript.net/14_event.html)
    - ELJS avsnitt om Events
    

## Övning 1

1. Skapa en ny knapp och lägg till den på din hemsida med JavaScript.
2. Bind en funktion till knappen genom någon av funktionerna ovan. Du skapar alltså en funktion i JavaScript och kallar på den genom `onClick`.
3. Funktionen ska ändra på bakgrundfärgen på sidan till en valfri färg när vi klickar på knappen genom att ändra `document.body.style.background`.
4. Lägg till ytterligare en funktion som ändrar bakgrundsfärgen till någon annan färg än den färgen som din första funktion.
5. Lägg till en `onmouseover` till samma knapp som kallar på den andra funktionen. 

Nu borde din knapp ändra färg på bakgrunden till en färg när du klickar på knappen samt ändra till en annan färg när du för musen över den.

## Övning 2

Använd de olika EventListeners för att skapa interaktivitet på din sida. Du kan t.ex. använda dig utav: 
* onclick 
* onmouseover 
* onmouseout

På din sida, implementera olika eventlisteners som gör följande:smile:
* Ändra färg på något
* Lägger till text på sidan
* Lägger till ett nytt element på sidan.


