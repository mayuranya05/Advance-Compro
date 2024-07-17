const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currantValue, index) {
    const returns = accumulator + currantValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currantValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}

array.reduce(reducer);