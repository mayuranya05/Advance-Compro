let str = "Hello";

// does the same as
// for (let char of str) console.log(cher);

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); //outputs characters one by one
}

// for loop
for (let char of "test") {
    //triggers 4 items: once for each character
    console.log(char); // t, then e, then s, then t
}