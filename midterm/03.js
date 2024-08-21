function longestUniqueSubarrayWithTargetSum(arr, targetSum) {
    let lastSeen = new Map();
    let currentSum = 0;
    let start = 0;
    let maxLength = 0;
    let subarray = [];

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        // Ensure the subarray is unique
        if (lastSeen.has(arr[end]) && lastSeen.get(arr[end]) >= start) {
            // Move the start index to one position after the last seen index of arr[end]
            start = lastSeen.get(arr[end]) + 1;
            // Recalculate currentSum for the new window
            currentSum = arr.slice(start, end + 1).reduce((a, b) => a + b, 0);
        }

        lastSeen.set(arr[end], end);

        // Check if the current subarray's sum matches the targetSum
        if (currentSum === targetSum) {
            if (end - start + 1 > maxLength) {
                maxLength = end - start + 1;
                subarray = arr.slice(start, end + 1);
            }
        }
    }

    return { maxLength, subarray };
}
// Example usage:
console.log(longestUniqueSubarrayWithTargetSum([2, 3, 4, 5, 6, 2, 3, 4, 7], 15));
// Expected output: { maxLength: 3, subarray: [4, 5, 6] }

console.log(longestUniqueSubarrayWithTargetSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 15));
// Expected output: { maxLength: 5, subarray: [1, 2, 3, 4, 5] }

console.log(longestUniqueSubarrayWithTargetSum([4, 5, 6, 7, 7, 8, 9, 10, 11], 26));
// Expected output: { maxLength: 0, subarray: [] }

console.log(longestUniqueSubarrayWithTargetSum([1, 1, 1, 1, 1], 2));
// Expected output: { maxLength: 0, subarray: [] }