//script.js
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat( maleNames);

console.log(allNames);

var newName = 'Marian';
var indexOfnewName = allNames.indexOf(newName);
var x = allNames.push(newName);

console.log('The search value is on ' + indexOfnewNames + ' position');
console.log(indexOfnewName);

if (allNames.indexOf(newName) === -1){
	return x;
} else {
	return 'Imię jest już w tabeli'
}

