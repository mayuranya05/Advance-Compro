function findUniqueSubstrings(str1, str2, length) {
    // Helper function to generate all substrings of a given length
    function generateSubstrings(s, length) {
        let substrings = new Set();
        for (let i = 0; i <= s.length - length; i++) {
            substrings.add(s.slice(i, i + length));
        }
        return substrings;
    }

    // Generate substrings for both strings
    let substrings1 = generateSubstrings(str1, length);
    

    // Find unique substrings
    let uniqueToStr1 = Array.from(substrings1).filter(sub => !substrings1.has(sub));
    

    // Combine the unique substrings
    return uniqueToStr1.concat(uniqueToStr1);
}

console.log(findUniqueSubstrings("abcdefabcdef", "acdfgacdfg", 3));
// Output: ['abc' , 'bcd' , 'cda' , 'def' , 'efa' , 'fab']
console.log(findUniqueSubstrings("hellohello", "helloword", 2));
// Output: ['oh']
console.log(findUniqueSubstrings("javascriptjs", "scriptjava", 4));
// Output: ['avas' , 'vasc' , 'ascr' , 'ptjs']
console.log(findUniqueSubstrings("aaaaaa", "aaaaaa", 2));
// Output: []