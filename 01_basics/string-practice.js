/************     COMPARING STRINGS       **********  */

const a = "a";
const b = "b";

//if(a<b){
//    console.log(`${a} is less than ${b}`)
//}else if(a==b){
//    console.log(`${a} is equal to ${b}`)
//}else{
//    console.log(`${a} is greater than ${b}`)
//}

const areEqual = (str1, str2, locale = "en-us") =>
    str1.localeCompare(str2, locale, {sensitivity:"accent"}) === 0;

areEqual("ß", "ss", "de"); // return false
areEqual("ı", "I", "tr");  // returns true

//***********    STRING PRIMITIVES AND STRING OBJECTS   ************ */

const strPrm = "foo";
const strPrm2 = String(1);
const strPrm3 = String(true);
const strObj = new String(strPrm);

//console.log(typeof strPrm);    
//console.log(typeof strPrm2);
//console.log(typeof strPrm3);
//console.log(typeof strObj);

const s1 = "2 + 2";
const s2 = new String("2 + 2");
console.log(eval(s1));   //return 4
console.log(eval(s2));   // return [String: '2 + 2']

console.log(eval(s2.valueOf()));   //return 4

//**********     STRING COERCION     *********** */

let sym = Symbol("description");
console.log(String(sym)); // Outputs: "Symbol(description)"
// But, doing "" + sym will throw a TypeError
//console.log("Praveen "+ sym);

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(url.split('-'));
console.log(url.split('%'));

