let str;
let num;
const repeatString = function(str, num) {
    if (num < 0) return "ERROR";
    let res = ""
    for (let i = 1; i <= num; i += 1){
        res += str;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
