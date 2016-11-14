//Hämta ut det element på sidan som har id item.

var item = document.getElementById("item");
console.log(item);

//Hämta ut alla <p>-element.

var listItems = document.getElementsByTagName("p");
console.log(listItems);

//Hämta ut det första <p>-elementet.

console.log(listItems[0]);

//Hämta ut det sista <p>-elementet.

console.log(listItems[listItems.length -1]);


//Hämta ut alla element med klassen myList.

var myList = document.getElementsByClassName("myList");
console.log(myList);


//Hämta ut alla children av klassen myList med hjälp av .children.

console.log(myList[0].children, myList[1].children);

for (var i = 0; i < myList.length; i++){
	var children = myList[i].children;
	for(var j = 0; j < children; j++){
		console.log(myList[i].children[j]);
	}
}

//Hämta ut föräldern till alla <p> med hjälp av .parentElement.

console.log(listItems[2].parentElement);

//Ändra så att det sista <p>-elementet har en annan färg på texten än de andra <p>-elementen.

listItems[listItems.length -1].style.color = "red";


//Ändra så att alla <li> har en större font-size.

var liItems = document.getElementsByTagName("li");

for (var i = 0; i < liItems.length; i++){
	liItems[i].style.fontSize = "21px";
}

//Ändra rubriken i <h1> till något annat än "En rubrik här".

var headings = document.getElementsByTagName("h1");

headings[0].innerHTML = "What";

//Ändra bakgrundsfärgen på .parentElement() till <p>.

listItems[2].parentElement.style.background = "lightcoral";

//Ta bort det första <p>-elementet med hjälp av parent.removeChild().

var parent = listItems[0].parentElement;

//listItems[0] == p
parent.removeChild(listItems[0]);

//Gör så att klick-funktionen tar bort varje element som du klickar på.

for( var i = 0; i < liItems.length; i++){
	liItems[i].addEventListener("click", function(){
		console.log(this);
		this.parentElement.removeChild(this);
	});
}