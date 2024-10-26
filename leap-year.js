/**
 * SOMPLE LOGIC
 * YEAR will be a leap year if ,it divisible by 4  and not divisble by 100
 * 2. yeap year will be divisible by 100 and 400
 */

function isLeapYear  (year){

    if( year % 4 ===0){
        return true;
    }
    else{
        return false;
    }
}

const leapYear1 = isLeapYear(2004);


console.log(leapYear1);

function isItLeapYear (year){
    if( year % 4 === 0 && year % 100 !== 0){
        return true;
    }
    else if( year %100 ===0 && year % 400 ===0 ){
        return true;
    }
    else{
        return false;
    }
}

console.log(isItLeapYear(2023));
console.log('___________________');
console.log(isItLeapYear(2400));
console.log('___________________');
console.log(isItLeapYear(2024));