const name = "Praveen" //declaration
const repo = 3

//console.log(name + repo + "Value");   //Not upto industry standards purana method h abhi prefer nhi krte

//console.log(`Hello my name is ${name} and my repo count is ${repo}`);   //abhi mostly yeh hi use hota h backend me bhi use hota h

const gameName = new String('Praveen-03')  //Another way of declaring string

//console.log(gameName[0]);
//console.log(gameName.__proto__);    //gives object

console.log(gameName.length);
// console.log(gameName.toUpperCase());
//1console.log(gameName.charAt(2));
//1console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
//1console.log(newString);

const anotherString = gameName.slice(-8, 4)
//1console.log(anotherString);

const newStringOne = "   hitesh    "
//1console.log(newStringOne);
//1console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

//console.log(url.replace('%20', '-'))

//console.log(url.includes('sundar'))

//console.log(gameName.split('-'));


const strstr =  'hello'
console.log(strstr.slice(-4,4))