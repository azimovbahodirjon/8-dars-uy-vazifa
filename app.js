// // Array1
// // function getInitialOdds(n) {

// //     let answer = []

// //     for (let i = 1; i <= n; i++) {
// //         answer.length == 0 ? answer.push(1) : answer.push(answer.at(-1) + 2)
// //     }
// //     return answer
// // }

// // console.log(getInitialOdds(5))

// //Array2

// // function getEvenReverse(arr) {
// //     let answer = [];

// //     for (let i = arr.length - 1; i >= 0; i--) {
// //         if (arr[i] % 2 === 0) {
// //             answer.push(arr[i]);
// //         }
// //     }

// //     return answer;
// // }

// // console.log(getEvenReverse([4, 5, 7, 8, 6, 9]));

// // Array3
// // function rearrangeArray(arr) {
// //     let answer = [];
// //     let n = arr.length;

// //     for (let i = 0; i < Math.floor(n / 2); i++) {
// //         answer.push(arr[i]);
// //         answer.push(arr[n - 1 - i]);
// //     }

// //     if (n % 2 !== 0) {
// //         answer.push(arr[Math.floor(n / 2)]);
// //     }

// //     return answer;
// // }

// // console.log(rearrangeArray([4, 5, 7, 8, 6, 9]));

// // Array4
// // function rangeSum(arr, K, L) {
// //     let sum = 0;

// //     for (let i = K; i <= L; i++) {
// //         sum += arr[i];
// //     }

// //     return sum;
// // }

// // console.log(rangeSum([1, 6, 9, 5, 8, 10, 15], 2, 5));

// // // Array5
// // function getSingleArr(arr) {
// //     let answer = [];
// //     let counts = {};

// //     for (let i = 0; i < arr.length; i++) {
// //         counts[arr[i]] = (counts[arr[i]] || 0) + 1;
// //     }

// //     for (let i = 0; i < arr.length; i++) {
// //         if (counts[arr[i]] === 1) {
// //             answer.push(arr[i]);
// //         }
// //     }

// //     return answer;
// // }

// // let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// // console.log(getSingleArr(arr));

// // // Array6
// // function swapMinMax(arr) {
// //     let minIndex = 0;
// //     let maxIndex = 0;

// //     for (let i = 1; i < arr.length; i++) {
// //         if (arr[i] < arr[minIndex]) {
// //             minIndex = i;
// //         }
// //         if (arr[i] > arr[maxIndex]) {
// //             maxIndex = i;
// //         }
// //     }

// //     console.log("Max:", arr[maxIndex]);
// //     console.log("Min:", arr[minIndex]);

// //     let temp = arr[minIndex];
// //     arr[minIndex] = arr[maxIndex];
// //     arr[maxIndex] = temp;

// //     return arr;
// // }

// // let arr = [7, 4, 9, 2, 3, 1, 5];
// // console.log(swapMinMax(arr));

// //UY VAZIFA

// // Array1
// function getLevel2(n) {
//     let result = [];

//     for (let i = 1; i <= n; i++) {
//         result.push(Math.pow(2, i));
//     }

//     return result;
// }

// console.log(getLevel2(5));

// //Array2
// function getSumArray(n, A, B) {
//     let arr = [A, B];

//     for (let i = 2; i < n; i++) {
//         let sum = arr.reduce((acc, curr) => acc + curr, 0);
//         arr.push(sum);
//     }

//     return arr;
// }

// console.log(getSumArray(5, 2, 3));

// // Array3
// function reverseArray(arr) {
//     return arr.reverse();
// }

// console.log(reverseArray([1, 2, 3, 4, 5]));

// //Array4
// function oddNumbers(arr) {
//     let oddCount = 0;
//     let oddNumbers = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             oddNumbers.push(arr[i]);
//             oddCount++;
//         }
//     }
// }

// //Array5
// function separateAndSort(arr) {
//     let evenNumbers = [];
//     let oddNumbers = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenNumbers.push(arr[i]);
//         } else {
//             oddNumbers.push(arr[i]);
//         }
//     }

//     return [...evenNumbers, ...oddNumbers.reverse()];
// }

// let result = separateAndSort([4, 5, 7, 8, 6, 9]);
// console.log(result);

// // Array6

// function getEvenIndexElements(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i += 2) {
//         result.push(arr[i]);
//     }

//     return result;
// }

// let result = getEvenIndexElements([10, 20, 30, 40, 50, 60]);
// console.log(result);

//Array7
// function getSelectedElements(arr) {
//     let result = [];

//     for (let i = arr.length - 1; i >= 0; i -= 2) {
//         result.push(arr[i]);
//     }

//     return result;
// }

// let result = getSelectedElements([10, 20, 30, 40, 50, 60]);
// console.log(result);

// Array8
// function separateIndices(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i += 2) {
//         result.push(arr[i]);
//     }

//     for (let i = 1; i < arr.length; i += 2) {
//         result.push(arr[i]);
//     }

//     return result;
// }

// let result = separateIndices([10, 20, 30, 40, 50, 60]);
// console.log(result);

// // Array9
// function separateAndSort(arr) {
//     let oddIndices = [];
//     let evenIndices = [];

//     for (let i = 1; i < arr.length; i += 2) {
//         oddIndices.push(arr[i]);
//     }

//     for (let i = arr.length - 2; i >= 0; i -= 2) {
//         evenIndices.push(arr[i]);
//     }

//     return [...oddIndices, ...evenIndices];
// }

// let result = separateAndSort([10, 20, 30, 40, 50, 60, 70]);
// console.log(result);

// Array10
// function customOrder(arr) {
//     let result = [];
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         if (left <= right) result.push(arr[left++]);
//         if (left <= right) result.push(arr[right--]);
//     }

//     return result;
// }

// let result = customOrder([10, 20, 30, 40, 50, 60, 70]);
// console.log(result);

//Array11
// function rangeOutSum(arr, K, L) {
//     let sum = 0;

//     for (let i = 0; i < K; i++) {
//         sum += arr[i];
//     }

//     for (let i = L + 1; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum;
// }

// let result = rangeOutSum([10, 20, 30, 40, 50, 60, 70], 2, 4);
// console.log(result);

//Array12
// function separateTruthyFalsy(arr) {
//     let truthy = [];
//     let falsy = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             truthy.push(arr[i]);
//         } else {
//             falsy.push(arr[i]);
//         }
//     }

//     return { truthy, falsy };
// }

// let result = separateTruthyFalsy([10, false, "", "Abdulaziz", null]);
// console.log("Truthy:", result.truthy);
// console.log("Falsy:", result.falsy);

// Array13
// function getOddMin(arr) {
//     let min = arr[0];

//     for (let i = 2; i < arr.length; i += 2) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }

//     return min;
// }

// let result = getOddMin([10, 20, 30, 40, 50, 60, 70]);
// console.log(result);

//Array14
// function getEvenMax(arr) {
//     let max = arr[1];

//     for (let i = 3; i < arr.length; i += 2) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return max;
// }

// let result = getEvenMax([10, 20, 30, 40, 50, 60, 70]);
// console.log(result);