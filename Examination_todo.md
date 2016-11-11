# Examination - ToDo-app

Denna uppgift går ut på att ta fram en webbapplikation i form av en *“att göra”*-lista. Du ska manipulera DOMen med hjälp av JavaScript för att lägga till och ändra innehållet på en hemsida.

### Struktur av uppgiften

Du får använda vilka HTML5-element du vill för att skapa listan och fokus är på att skapa strukturen och innehållet. Du kan använda "placeholders", alltså tillfälliga element för att lägga upp ungefär hur ToDo-appen ska se ut och sedan lägga in funktionaliteten. Att lägga upp det snyggt med CSS är såklart ett plus men inget som prioriteras enligt betygskriterierna. Dock ska listan ha vissa saker som följer nedan:

* Lägga till en syssla i listan ska bestå av:
    - Ett element där användaren kan skriva in text t.ex. ”Lära mig JavaScript”. 
    - En knapp med lämplig text som trycks på för att lägga till texten i rutan till listan
* ”Att göra”-listan i sig ska bestå av:
    - Flera sysslor (om användaren har lagt till en syssla, annars ska listan vara tom).
    - Förutom att varje syssla innehåller "Att göra-texten" ska det även finnas knappar kopplade till sysslan för att ändra innehållet: 
        - Markera sysslan som klar 
        - Ta bort sysslan
    - När man markerat sysslan som klar ska sysslan läggas i en "Färdiga sysslor"-lista.


## Exempel på interaktion

Implementera lämplig funktionalitet i ToDo-appen med hjälp av JavaScript. Utgå från följande scenarion:

* Scenario 1 (Lägga till syssla)
    - Användaren skriver in sysslan ”handla mat”
    - Användaren klickar på knappen för att lägga till
    - Sysslan läggs till i en lista av sysslor
* Scenario 2 (Markera syssla som klar)
    - Användare klickar på knappen för att markera syssla som klar.
    - Sysslan flyttas från ”Att göra”-listan till en lista för färdiga sysslor - Sysslan finns inte längre i ”Att göra”-listan
    - Sysslan har nu bara en knapp för att ta bort sysslan
* Scenario 3 (Ta bort en syssla)
    - Användaren klickar på knappen för att ta bort en syssla och sysslan försvinner från den lista den tillhör.


# Betygskriterier

För __G__ krävs det att du uppfyller interaktiveten ovan. Det betyder att man ska kunna lägga till en syssla, ta bort en syssla samt markera en syssla som klar. När sysslan är klar ska den flyttas till en lista med färdiga sysslor.

För __VG__ krävs det även att du strukturerar din kod i form av funktioner. Exempel: om du ska lägga till en ny syssla ska du ha en funktion som t.ex. heter `addTodo()` som kallas på när du ska lägga till en ny syssla.
För __VG__ krävs även att du hanterar scenariot när användaren försöker lägga till en tom syssla. Om fältet för att lägga till sysslan är tom ska användaren inte kunna lägga till sysslan.





