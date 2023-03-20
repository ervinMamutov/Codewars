'use strict';

/*

In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

Have fun!
*/
/*
function pickPeaks(arr){
  let counter = 0;
  let pic = {pos: [], peaks: []};
  let min = arr[0];
  let max = min;
  let minArr = {posMin:[], peaksMin:[]};
  let maxArr = {posMax:[], peaksMax:[]};

  for (let i of arr) {
    if (i > arr[counter - 1] && i > arr[counter + 1]){
      pic.pos.push(counter);
      pic.peaks.push(i);
      

    } else {
      if (i > arr[counter - 1] && i === arr[counter + 1] && i === arr[counter + 2] && i < arr[counter + 3])  {
        
      } else { 
          pic.pos.push(counter);
          pic.peaks.push(i);
          
        }
      }
    
    counter++;
  }
  return pic;
}


*/

/*
function pickPeaks(arr) {
  const pos = [];
  const peaks = [];
  let plateauStart = -1;
  
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {  // potential peak
      plateauStart = i;
    } else if (arr[i] < arr[i - 1] && plateauStart !== -1) {  // actual peak
      pos.push(plateauStart);
      peaks.push(arr[plateauStart]);
      plateauStart = -1;
    } else if (arr[i] === arr[i - 1]) {  // plateau
      plateauStart = -1;
    }
  }
  
  return { pos, peaks };
}
*/

function pickPeaks(arr) {
  let pos = [];
  let peaks = [];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      let j = i;
      while (j < arr.length - 1 && arr[j] === arr[i]) {
        j++;
      }
      if (arr[j] < arr[i + 1]) {
        pos.push(i);
        peaks.push(arr[i]);
      }
    }
  }

  return { pos, peaks };
}

console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]));





      
      
  

/*

console.dir(pickPeaks([1,2,3,6,4,1,2,3,2,1])); // {pos:[3,7],peaks:[6,3]} 
console.dir(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1])) // {pos:[3,7,10],peaks:[6,3,2]}
console.dir(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3])); // {pos:[2,7,14,20], peaks:[5,6,5,5]});
console.dir(pickPeaks([2,1,3,1,2,2,2,2,1])) // {pos:[2,4], peaks:[3,2]}
console.dir(pickPeaks([1,1,1,1])) //{pos:[],peaks:[]})
console.dir(pickPeaks([1,2,2,2,1])) // {pos:[1],peaks:[2]}

*/