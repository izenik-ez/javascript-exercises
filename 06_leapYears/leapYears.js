const leapYears = function(year) {
/*
    // Leap years are divisible by four
    if ( year % 4 === 0 ){
        // Years divisible by 100 are not leap years.
        // Unless they are divisible by 400.
        if ( year % 100 === 0 ){
            return year % 400 === 0;
        }        
        return true;
    }
    return false;
*/
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 == 0 );
};

// Do not edit below this line
module.exports = leapYears;
