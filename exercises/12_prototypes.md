## Objekt & Prototyper

Varje objekt har en prototyp som är ett annat objekt. Som vi har diskuterat är t.ex. en funktion ett objekt och det mesta annat är också objekt. En array är en typ av objekt. Detta blir möjligt eftersom inom programmering kan olika objekt ärva variabler och funktioner från varandra eftersom allting är objekt.

Om vi ser på koden nedan så kan vi skapa ett nytt objekt med `new Rectangle()` från vår `constructor`. `Rectangle` är dock inte ett objekt utan en funktion som skapar objekt. Om vi vill att objektet ska ha en funktion som returnerar arean t.ex. skulle vi kunna lägga till `this.getArea`. Då har varje objekt en egen funktion som heter `getArea`.

```javascript
function Rectangle(width, height) {
    this.height = height;
    this.width = width;
    this.getArea = function(){
        return this.height * this.width;
    }
}

var rect = new Rectangle(5, 10);
console.log(rect.getArea());

```


Dock så är ju `getArea` lika för varje objekt som skapas. Variablerna ändras men funktionen behöver inte ändras. Det är bättre om vi skapar en funktion som kan användas av varje `Rectangle` men inte är speciellt bunden till varje enskilt objekt.

```javascript
function Rectangle(width, height) {
    this.height = height;
    this.width = width;
}

var getArea = function(){
    return this.height * this.width;
}

Rectangle.prototype.getArea = getArea;

var rect = new Rectangle(5, 10);
console.log(rect.getArea());

```

## Create an animal

Ta en titt på koden ovan. Nu ska vi försöka återskapa liknande funktionalitet. 

1. Skapa en constructor `Animal` som har två parametrar: `name` och `species`.
2. Skapa sedan en vanlig funktion som heter `getAnimal` som returnerar namnet och arten i stil med "This is a cat named Ninni".
3. Bind sedan funktionen till `Animals` prototyp som tidigare visat.
4. Skapa sedan ett nytt `Animal` med hjälp av constructor.
5. Kalla sedan på `getAnimal` på ditt djur.
6. Använd `console.log(Object.getPrototypeOf(ditt_djur)` för att se vilken prototyp ditt djur har.
7. Nu kan vi på alla djur kalla på `getAnimal` och få ut namnet och arten. Det är samma funktionalitet som tidigare men uppdelningen är tydligare och öppnar upp för arv.

## Create animals

Man kan även låta andra constructorer ärva prototyper genom tilldelning. Vi tittar på hur det kan se ut.

1. Skapa en ny prototyp som heter `Cat` och som har samma parametrar som `Animal`. 
2. Vi kan nu låta `Cat` ärva av `Animal` genom att att låta `Cat` ärva prototypen:

```javascript
Cat.prototype = new Animal();
```

3. Testa nu att skapa ett nytt `Cat`-objekt samt anropa `getAnimal` på detta objekt.

4. Genom att använda `call` kan vi även återanvända `Animal`s constructor. Eftersom alla `Cat` har `species` som är `"Cat"` ska vi inte behöva ange det varje gång vi skapar en `Cat`:

```javascript
function Cat(name){
    //this syftar på kattobjektet som skapas.
    //species kommer ju alltid vara "Cat" i denna constructor. Så vi sätter
    //species till att vara "Cat". Men namnet ska ju vara annorlunda
    //Så det måste vi skicka med.
    Animal.call(this, name, "Cat");
}

```
*Object.call(objectToCall, parameters)*

4. Nu kan vi skapa en ny katt enbart med att skicka med namnet: `new Cat('Kitty')`. Vi sätter alltså Cats prototyp till att använda sig utav Animals prototyp. Eftersom Animal har sedan tidigare `getAnimal` kan vi använda oss utav den samt återanvända constructorn.


## Skapa en playlist

Vi ska nu skapa en playlist med hjälp av constructorer och prototyper. Det finns ett skalprojekt på GitHub som du ska utgå ifrån samt även en **README** med instruktioner om vad du ska ändra på i projektet.










