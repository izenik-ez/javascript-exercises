const ftoc = function(f) {
    // Fahrenheit to celsius;
    let c = (f - 32) * 5/9;

    // + sign means convert to number
    return +c.toFixed(1);
};

const ctof = function(c) {
    // Celsius to Fahrenheit
    let f = c * 9/5 + 32;

    // + sign means convert to number    
    return +f.toFixed(1);

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
