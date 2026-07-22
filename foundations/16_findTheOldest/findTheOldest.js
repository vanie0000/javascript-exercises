let arr;
const findTheOldest = function(arr) {
    for (let person of arr){
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
    }
    arr.sort((a, b) => {
        const ageA = a.yearOfDeath - a.yearOfBirth
        const ageB = b.yearOfDeath - b.yearOfBirth
        return ageB - ageA
    })
    return arr[0]
};

// Do not edit below this line
module.exports = findTheOldest;
