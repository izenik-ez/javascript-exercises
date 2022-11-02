const getTheTitles = function(array) {
    let titleArray = [];
    // for(const book in array){
    //     console.log(book);
    //     titleArray.push(array[book].title);
    // }
    array.forEach((item) => {
        titleArray.push(item.title);
    });
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
