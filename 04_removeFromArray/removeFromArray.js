/* My Solution */
/*
const removeFromArray = function(array, ...items) {
    let index = 0;
    let newArray = array;
    for (item of items){
        index = newArray.indexOf(item);
        if (index != -1){
            newArray = newArray.slice(0, index).concat(newArray.slice(index+1));
        }
    }
    return newArray;
    };*/

// 2 solutions.
// The easy one
const removeFromArray = function(...args){
    // The very first item in our list of arguments is the array.
    const array = args[0];
    // Create new empty array
    const newArray = [];

    array.forEach(item) => {
        if(!args.includes(item)){
            newArray.push(item);
        }
    }
    return newArray;
}

// More Advanced one
/*
const removeFromArray = function(...args){
    const array = args[0];
    return array.filter(val => !args.includes(val));
}
*/
// Do not edit below this line
module.exports = removeFromArray;
