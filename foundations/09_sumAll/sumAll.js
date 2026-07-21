let a;
let b;
const sumAll = function(a, b) {
    for (let i = 0; i < arguments.length; i += 1){
        if (!(Number.isInteger(arguments[i])) || !(arguments[i] > 0)) return "ERROR";
    }
    let sum = 0;
    let maxi;
    let mini;
    if (a > b){
        maxi = a;
        mini = b;
    } else {
        maxi = b;
        mini = a;
    }
    for (let i = mini; i <= maxi; i += 1){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
