var album = {
	albumName: "Dark side of the moon",
	artist: "Pink Floyd",
	year: 1974
}

console.log(album);

console.log("***************************************");

album.year = 1975;
console.log(album);

console.log("***************************************");

for(i in album){
	console.log(i + ": " + album[i]);
}

console.log("***************************************");

function printContent(album){
	for(i in album){
	console.log(i + ": " + album[i]);
	}
	//console.log("The album " + album.albumName + " by " + album.artist + " was relese in " + //album.year);
}

printContent();

console.log("***************************************");

var popArray = [5, "hello", 54, 17, 23];

console.log(popArray.pop());

popArray.push(12);

console.log(popArray);

popArray.shift();
console.log(popArray);
popArray.shift();
console.log(popArray);


popArray.unshift(23)
console.log(popArray);
popArray.unshift("hi");
console.log(popArray);

var newPopArray = [];
newPopArray = popArray.splice(2);
console.log(popArray);
console.log(newPopArray);

var popArray4 = [5, "hello", 54, 17, 23];

var popArray2 = [];
popArray2 = popArray4.splice(1,2);
console.log(popArray4);
console.log(popArray2);

var myArray1 = [1,2,3];
var myArray2 = [4,5,6];
var myArray12 = [];
myArray12 = myArray1.concat(myArray2);
console.log(myArray12);

var sortingArray = [ 45, 23, -5, 12];
console.log(sortingArray.sort());

var crazySort = ["string", "hej", "what", "wordsyo"];
console.log(crazySort.sort());
console.log(crazySort.reverse());
console.log("***************************************");

function weapon(type,damage){
	this.type = type,
	this.damage = damage
}

function monster(name, health){
    this.name = name;
    this.health = health;
    this.speak = function(){
        console.log(this.name + " hungry! " + this.name + " kill!");
    }
}

var grublak = new monster("Grublak", 500);

grublak.speak();

var heroesWeapon = new weapon("Tenta", 50);

function slayMonster(weapon, monster){
	
		
	while(weapon.damage < monster.health){
		
		var crit = Math.floor(Math.random()*100);
		
			console.log("Strike");
			console.log(monster.health);
			console.log("********");
			if(crit === 20){
				monster.health = monster.health - weapon.damage*2;
				console.log("Strike with the critical weapon!")
			}else if(weapon.type === "Tenta"){
				monster.health = monster.health - weapon.damage*2;
				
			}else{
				monster.health = monster.health - weapon.damage;
			}
			
			
	}
	if(weapon.damage <= monster.health || weapon.damage > monster.health){
				console.log("Ouch, me dead!");
	}
		
}

slayMonster(heroesWeapon,grublak);


console.log("***************************************");

var grublak = new monster("Grublak", 500);
var torlak = new monster("Torlak", 700);
var huslak = new monster("Huslak", 1000);

var monsters =[grublak, torlak, huslak];

for(var i = 0; i <3; i++){
	slayMonster(heroesWeapon,monsters[i]);
}
