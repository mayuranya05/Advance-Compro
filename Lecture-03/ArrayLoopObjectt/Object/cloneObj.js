// Object clonning
// Obj Ref, Obj Clonning assing(), {... x}, JSON
//
const obj1 = {
    person : 'Mayuranya',
    weight : 85
}

//const obj2 = obj1;
//const obj2 = object.assing({},obj1);
const obj2 = {... obj1};
obj2.weight = 75;
console.log(obj1);
console.log(obj2);