function groupByProperty(objects, property) {

}

const data = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "San Francisco" },
    { name: "Charlie", age: 25, city: "New York" },
    { name: "David", age: 30, city: "Los Angeles" },
    { name: "Eve", age: 35, city: "San Francisco" }
    ];


console.log(groupByProperty(data , "age"));


console.log(groupByProperty(data , "city"));
