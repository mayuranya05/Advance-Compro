function reverseString(valur) {
    let reverseValue = " ";

    valur.split("").forEach((char) => {
        reverseValue = char + reverseValue;
    });

    return reverseValue;
}

 console.log(reverseString("Reverse Me"));