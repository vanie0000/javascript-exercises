let arr;
const removeFromArray = function (arr) {
    for (let i = 1; i < arguments.length; i += 1) {
        let index = arr.indexOf(arguments[i])
        while (index !== -1) {
            arr.splice(index, 1); 
            index = arr.indexOf(arguments[i]);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
