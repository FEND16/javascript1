# Uppgift: Betygsystem

Din uppgift blir att bygga ett betygsystem med funktionaliteten som är beskriven nedanför. 

Systemet ska kunna läsa in namnet och betyget på en student och spara den informationen som ett nytt objekt i en array. Systemet ska sedan kunna plocka ut medelbetyg, de studenter som passerade och en specifik student efter namn med hjälp av funktionerna nedan. Du kan lösa denna uppgift utan att använda en constructor men funktionerna och arrayen ska tillhöra objektet `grades`.

## Systemets specifikationer

* **Namnet på objektet**
* `grades`

* **Egenskaper**
* `students []` -> en array av objekt

* **Metoder**

| Metod | Uppgift |
|---|---|
|`average()`| Ett medelvärde på betyget från alla som deltog|
|`didPass(number)`| En array med studenter som klarade den inskickade nivån|
|`didNotPass(number)`| En array med studenter som ej klarade den inskickade nivån|
|`find(studentName)`| Poängen för en specifik student (anta att alla har unika namn)|
|`add()`| Startar en loop som läser in studenter via prompt till dess att den avbryts och fyller students-egenskapen|
