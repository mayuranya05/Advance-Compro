function reverseString(valur) {

    const reverseValue = valur.split('').reverse().join('')
    return reverseValue;
}

console.log(reverseString("Hello JavaScript"));