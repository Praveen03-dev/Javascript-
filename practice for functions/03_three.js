// Input: { balance: 1000 }
// Output: 1100

// const obj ={
//     balance: 1000,
//     calculate(){
//         console.log(`${this.balance+100}`)
//     }
// }
// obj.calculate();

/********************** Question 2****************************** */

// Input: [10, 20, 30]
// Output: 60

// const arr = [10,20,30]
// console.log(arr.reduce((acc,num)=> {
//     acc+=num
//     return acc
// },0))

/***********************   Question 3 ************************/

// Input: [1, 2, 3, 4, 5, 6]
// Output: [4, 16, 36]

const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.filter((num) => num%2 === 0).map((num) => num**2))  //direct method

const func = () => {
    return arr.filter((num) => num%2 === 0).map((num) => num**2)       //using arrow function
}
console.log(func());