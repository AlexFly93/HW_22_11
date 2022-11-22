// 1) Знайти середнє арифметичне значення усіх переданих аргументів, якщо аргументів не має - повертати null
const nums = [11,13];

const findAverage = function (array) {
  if (array.length === 0) {
    return null;
  }return findSum(array) / array.length;
};

const findSum = function (array) {
  let sum = 0;
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } return sum;
  }
 


console.log(findAverage(nums));

// 2) Замінити усі максимальні значення в масиві на значення 0
const nums2 = [6, 2, 5, 8, 10, 14, 11, 14];
function changeMaxElem(array, value) {
  let maxElem = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxElem) {
      maxElem = array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === maxElem) {
      array[i] = value;
    }
  }
}
console.log(changeMaxElem(nums2, 0));
console.log(nums2);
