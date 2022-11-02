const fibonacci = function(nth) {
    let iterations = parseInt(nth);
    let n1 = 1;
    let n2 = 1;
    let result = 0;
    
    if (nth < 0) return "OOPS";
    if (nth <= 2) return 1;
    
    for(let i = 0; i < iterations-2 ; ++i){
        result = n1 + n2;
        n1 = n2;
        n2 = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
