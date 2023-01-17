const repeatString = function(string, num) {
    let str = string;
    let multiStr = "";
    if (num < 0) {
        return 'ERROR';
    } else {
        for (i=0; i < num; i++) {
        multiStr += str;
    }}
    return multiStr;
};

// Do not edit below this line
module.exports = repeatString;
