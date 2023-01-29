const removeFromArray = function(theArray, ...args) {
  // creating empty arry, will return later
  const newArr = [];
  theArray.forEach((item) => {
    if (!args.includes(item)) {
      // adding to the new array if != args
      newArr.push(item);
    }
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
