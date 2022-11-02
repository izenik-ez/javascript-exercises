const palindromes = function (str) {
    let newStr = str.replace(/[^\w]/g,"").toLowerCase();
    return newStr ===  newStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
