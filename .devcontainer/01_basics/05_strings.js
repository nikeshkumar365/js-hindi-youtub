const name = "nikesh"

const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`nikeshworr`)

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf(`o`));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   nikesh   "
console.log(newStringOne);
console.log(newString.trim());

const url = "https://Github.com/nikeshkumar365"

console.log(url.replace('365', '123'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));