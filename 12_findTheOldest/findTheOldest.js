const getAge = function (p){
    if(!p.yearOfDeath){
        p.yearOfDeath = new Date().getFullYear();
    }
    
    return p.yearOfDeath - p.yearOfBirth;
}


const findTheOldest = function(array) {
    return array.reduce((old, person) => {
        return getAge(old) < getAge(person) ? person : old;
    });
}


// Do not edit below this line
module.exports = findTheOldest;
