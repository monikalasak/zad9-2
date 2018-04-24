//script.js
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat( maleNames);

console.log(allNames);

var newName = 'Marian';
var indexnewName = allNames.indexOf(newName);
var addnewName = allNames.push(newName);

console.log('The search value is on ' + indexnewName + ' position');
console.log(indexnewName);

if (allNames.indexOf(newName) === -1){
	console.log(addnewName);
} 

