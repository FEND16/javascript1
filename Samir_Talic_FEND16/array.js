
var nackfolk = [50,23,27,32];
var saAlder = 0;

for(var i = 0; i < nackfolk.length; i++){
	saAlder += nackfolk[i];
	console.log(saAlder);
}

var snittAlder = saAlder/nackfolk.length;

console.log(snittAlder);
console.log("********************************")

var bestArray = [ 1, 2, 3, 4, 5];
var sum = bestArray[0];

for(var i = 0; i < bestArray.length; i++){
	sum *= bestArray[i];
}
console.log(sum);
console.log("********************************")

var okArray = [ "fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];

for(var i = 0; i < okArray.length; i++){
	if(okArray[i].length < 5){
		console.log(okArray[i]);
	}
console.log("********************************")

for(var i = 0; i < okArray.length; i++){
	if(okArray[i].toLowerCase() === "fine"){
		console.log(okArray[i]);
	}
}
}

console.log("********************************")

var worstArrayYet = ["string", true, 42, "another string", 54, null, 12];
var sum = 0;

for(var i = 0; i < worstArrayYet.length; i++){	
		
	if(!isNaN(worstArrayYet[i])){
		if(typeof(worstArrayYet[i]) === 'boolean' || typeof(worstArrayYet[i]) === "object"){
			
		}else{
			sum += worstArrayYet[i];
		}
	}else{
		console.log(worstArrayYet[i]);
	}
}

console.log("Summan är " + sum);
