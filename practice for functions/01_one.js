// Input: [1, 2, 3, 4]
// Output: [2, 4, 6, 8]

// const arr = [1,2,3,4]
// let ans = []
// arr.forEach(num => {
//     ans.push(num*2)
// });
// console.log(ans);          // also use arr.map , arr.reduce , (for , for of, while) loops

//************* question 2 ***************** */

// Input: {name: "Aryan"}
// Output: "Aryan"

// const obj = {
//     name: "Aryan"
// }
// function printName(obj){
//     console.log(`${this.name}`)
// }
// printName.apply(obj);  //Method 1

// const h = printName.bind(obj);    //Method 2
// h();

// const obj = {                            //Method 3
//     name: "Aryan",
//     print: function(){
//         const printfunc = () => {
//             console.log(`${this.name}`)
//         };
//         printfunc();
//     }
// }
// obj.print();

//******* Question 3 ************* */

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 6, 10]

// const arr = [1, 2, 3, 4, 5, 6]
// const ans = arr.filter( (num) => num%2 !== 0).map(num => num*2);
// console.log(ans);

//********** Question 4 ************ */

// Input: [{name: "John", age: 20}, {name: "Jane", age: 17}, {name: "Bob", age: 19}]
// Output: ["John", "Bob"]

const arr = [{name: "John", age: 20}, {name: "Jane", age: 17}, {name: "Bob", age: 19}]

const ans = []
arr.forEach( (num) =>{
    if(num.age>=19){
        ans.push(num.name)
    }
});
console.log(ans);