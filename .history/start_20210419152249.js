/**
 * 1. Declare two functions: calculateGolfAverages and calculateTotalAverages
 */
// function calculateGolfAverages() {
//   for
// }
// function calculateTotalAverages() {}

/**
 * 2. Implement calculateGolfAverages
 *
 * This function should print out the average score of each round
 * This function should receive the "golfScores" array as a parameter
 * This function should console log the average score of each round in the array
 * Please show only two decimals of accuracy on the averages:
 *
 * An example of the expected output
 * "The average score for round 4 is 1.33"
 */

/**
 * 3. Implement calculateTotalAverages
 *
 * This function should print out the average of all average scores
 * This function should receive the "golfScores" array as a parameter
 * This function should console log the average of all averages
 * Please show only two decimals of accuracy
 *
 * An example of the expected output:
 * "The average of averages is 1.39"
 */

///! ----- PLEASE DO NOT EDIT BELOW THIS ---- !///
let avgOne;
const golfScores = [
  [1, 2, 2, -1, 5, 1, 2, 1, 6, 2, 1, 0, 5, 3, 0, 1, 1, 0],
  [1, 1, 3, 0, 3, 2, 2, 1, 6, 2, 1, 0, 3, 1, -1, 2, 1, 0],
  [2, 1, 2, 1, 4, 1, 2, 1, 6, 2, 1, 0, -1, 3, 0, 2, 1, 0],
  [0, 2, 3, 0, 3, 1, 1, 1, 6, 2, 1, 0, 0, 2, 0, 1, 1, 0],
  [0, 1, 5, -2, 3, 2, 2, 1, 6, 2, 1, 0, -2, 3, 0, 2, 1, 0],
  [1, 1, 3, -1, 4, 2, 1, 1, 6, 2, 1, 0, -1, 4, 0, 4, 1, 0],
  [0, 2, 1, 0, 3, 0, -1, 1, 6, 2, 1, 0, 0, 3, -2, 2, 1, 0],
  [0, 1, 1, 0, 2, 1, -1, 1, 4, 2, 1, 1, 0, 2, -1, 1, 0, 0],
];

let arraySum = [];

function calculateGolfAverages() {
  for (var i = 0; i < golfScores.length; i++) {
    let result = golfScores[i];
    // console.log(result);
    let roundSum = 0;

    for (var j = 0; j < result.length; j++) {
      roundSum = roundSum + result[j];

      // let resultAverage = (result[j] + result.length) / result.length;
      // console.log("This is the sum: " + result[j] + result.length);
      // console.log(
      //   "The average score of round " + j + " is: " + resultAverage.toFixed(2)
      // );
      // arraySum.push(resultAverage.toFixed(2));
    }
    console.log(
      "This average score for round " +
        i +
        " is: " +
        (roundSum / result.length).toFixed(2)
    );
    arraySum.push((roundSum / result.length).toFixed(2));
  }
}

calculateGolfAverages();

console.log("This is arraySum: " + arraySum);
0;
function calculateTotalAverages() {
  let godKnowsThisIsFinalResult = 0;
  for (var i = 0; i < arraySum.length; i++) {
    godKnowsThisIsFinalResult = godKnowsThisIsFinalResult + arraySum[i];
    console.log(
      "The average of average is " + godKnowsThisIsFinalResult / arraySum.length
    );
  }
}

calculateTotalAverages();
