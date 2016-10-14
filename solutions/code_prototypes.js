//constructor som används för att skapa ett nytt objekt
function Person(name, age){
	this.name = name;
	this.age = age;
	//this.getName = function(){
	// 	console.log(this.name, this.age);
	// };
}

/**
 * Prototypens funktion som hämtar namnet
 * Denna funktion blir bunden till Person vilket betyder
 * att varje objekt som skapas med Person kommer att ha denna funktion.
 */

Person.prototype.getName = function(){
	console.log(this.name);
};

//Skapa ett nytt objekt utifrån constructorn. Kom ihåg 'new'.
var person1 = new Person("Jesper", 25);

//Vanlig funktion som pekar på 'this'. För tillfället är 'this' ingenting eftersom
//this pekar på global scope. Funktionen står alltså självständigt och tillhör inget objekt
function getName(){
	console.log(this.name);
}

/**
 * Function.call(Object, argument)
 * Funktionen som ska kallas följt av den inbyggda funktionen 'call'. 
 * Första argumentet är objektet vi ska kalla på. Det går även att skicka med
 * flera argument.
 */

getName.call(person1);

/**
 * Vi kan kalla på constructorn Person igenom om vi vill och ändra på ett objekts
 * värden. Person är constructorn vi kallar på, person1 är objektet vi ska ändra
 * "Inte Jesper" blir till name i constructorn och 55 blir till age i constructorn.
 * Vi kan alltså med 'call' skicka med extra argument. 
 */

Person.call(person1, "Inte Jesper", 55);

/**
 * Apply fungerar likadant men istället skickar vi med en array av värden.
 */

Person.apply(person1, ["Inte Jesper", 55]);


/**
 * Om vi kallar på objektet igen ser vi nu att värderna är ändrade
 */
getName.call(person1);


function Employee(name, age, title){
	// this.name = name;
	//this.age = age;
	//Kallar på Person.constructor för att återanvända constructorn.
	//'this' pekar på det nya objektet som kommer att skapas. Använder
	//this.name = name samt this.age = age från Person högst upp i koden
	Person.call(this, name, age);
	//Varje employee har titeln Employee
	this.title = "Employee";
}

/**
 * Vi kan låta Employee ärva utav Person genom att tilldela 'new Person()'
 * till Employees prototyp. Allting som Person kan, kan nu även Employee.
 * 
 */

Employee.prototype = new Person();

//Eftersom "Employee" är "hårdkodat" behöver vi inte skicka med det värdet.
//Vi skickar bara med namn och ålder.


var emp1 = new Employee("Jesper", 25);
console.log(emp1);
//Ärver .getName();
emp1.getName();






