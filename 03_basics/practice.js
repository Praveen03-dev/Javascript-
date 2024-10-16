// const game = Symbol("Cricket")

// const jsUser = {
//     username: "Praveen",
//     "fullname": "Praveen Kumar Yadav",
//     marks: 20,
//     jacked: true,
//     [game]:"Basketball"
// }

// function info(jsUser){
//     console.log(`${this["username"]}`)
// }
// info.apply(jsUser) 

const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

function greet() {
    console.log(`Hello, I am ${this.name}`);
}

// greet.call(user1);  // Output: "Hello, I am Alice"
// greet.call(user2);  // Output: "Hello, I am Bob"
// greet.apply(user1);  // Output: "Hello, I am Bob"
// greet.apply(user2);  // Output: "Hello, I am Bob"
// // `call()` allows you to set `this` to different objects.

const boundGreet = greet.bind(user1);
boundGreet(); // Output: "Hello, I am Alice"

const againBound = boundGreet.bind(user2);
againBound();
// `bind()` creates a new function where `this` is permanently set to `user1`.
