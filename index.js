function hasTargetSum(array, target) {
  for (let number = 0; number < array.length; number++) {
    for (let i = 0; i < array.length; i++) {
      if (array[number] + array[i] === target) {
        return true;
      }
    }
    return false;
  }
}

/* 
The time complexity of the function is O(n2). It has 2 nested 'for' loops.

*/

/* 
Create a function called hasTargetSum that takes 2 parameters - array of integers and target integer
Output needs to be a boolean - true if pair adds up to target, otherwise false.
For each element in array as current element
for each element in array starting from the next element, as next element
If sum of current element and next element equals target then return true. Otherwise return false */

/*
  The function checks all combinations of 2 numbers in the array to see if they add up to the target.
  It it does it returns true. If it doesn't it returns false./
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
