//*********Question 1***************** */

// Input: [1, 2, 3, 4]
// Output: { sum: 10, product: 24 }

// const obj ={}                                                //Method 1
// const arr = [1, 2, 3, 4]
// let add = 0
// let prod = 1
// for (let index = 0; index < arr.length; index++) {
//     add = add + arr[index];
//     prod = prod*arr[index];
// }
// obj.sum = add
// obj.product = prod
// console.log(obj);


// function addAndProd(arr){                                        //Method 2
//     return arr.reduce((acc,num)=>{
//         acc.sum += num
//         acc.product *= num
//         return acc
//     },{sum:0, product:1})
// }

// const arr = [1, 2, 3, 4]
// console.log(addAndProd(arr))

//****************** Question 2 ************************************************/

// Input: { name: "List", items: ["Item1", "Item2", "Item3"] }
// Output: "List: Item1", "List: Item2", "List: Item3"

// const obj = { name: "List", items: ["Item1", "Item2", "Item3"] }   //Output alag alag line me aa rha h 
// function print(obj){
//     for (let i = 0; i < this.items.length; i++) {
//         console.log(`${this.name}: ${this.items[i]}`)
//     }
// }
// print.apply(obj);

// const obj = {
//     name:"List",
//     items: ["Item1", "Item2", "Item3"],
//     printitems(){
//         for (let i = 0; i < this.items.length; i++) {
//             console.log(`${this.name}: ${this.items[i]}`);
//         }
//     }
// }
// obj.printitems();

/**************  Question 3  ************************************/

// Input: ["apple", "hi", "code", "javascript"]
// Output: ["apple", "javascript"]

const obj =["apple", "hi", "code", "javascript"]
console.log(obj.filter((num) => num.length>=5));