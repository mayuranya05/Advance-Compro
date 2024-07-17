const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currantValue) => {
    return accumulator + currantValue;
});

console.log(sum); //10