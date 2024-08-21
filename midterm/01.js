function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0;
    let maxLen = 0;
    let longestSubstring = "";
    let currentSubstring = "";

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            currentSubstring = currentSubstring.slice(1);
            left++;
        }
        charSet.add(s[right]);
        currentSubstring += s[right];

        if (currentSubstring.length > maxLen) {
            maxLen = currentSubstring.length;
            longestSubstring = currentSubstring;
        }
    }

    return { maxLen, longestSubstring };
}
console.log(lengthOfLongestSubstring("abcabcbb"));
//Outup: { maxLen: 3, longestSubstring: "abc"}

console.log(lengthOfLongestSubstring("bbbbb"));
//Outup: { maxLen: 1, longestSubstring: "b"}

console.log(lengthOfLongestSubstring("pwwkew"));
//Outup: { maxLen: 3, longestSubstring: "wke"}

console.log(lengthOfLongestSubstring(""));
//Outup: { maxLen: 0, longestSubstring: " "}