const add = function(n1,n2) {
    return n1+n2;
};

const subtract = function(n1,n2) {
    return n1-n2;
};

const sum = function(array) {
    return array.reduce((total, i) => { return total + i}, 0);
};

const multiply = function(array) {
    return array.reduce((total, i) => { return total * i}, 1);
};

const power = function(base, expt) {
    return base**expt;
};

const factorial = function(n) {
    let fact = n;
    if(n <= 1){
        return 1;
    }else{
        fact *= factorial(n-1);
    }
    return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
