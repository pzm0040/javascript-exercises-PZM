// 1. split string into array 2.


const reverseString = function(str) {
    const strOne = str;
    let strArray = strOne.split('');
    let lenArray = strArray.length;
    let i = lenArray - 1;
    let reverseArray = [];
    if (lenArray < 1){
        reverseArray = '';
    } else {
        while (i >= 0){
            reverseArray += strArray[i];
            i--;
        }
    }
    return reverseArray;
};

// Do not edit below this line
module.exports = reverseString;
