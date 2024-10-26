// 12 inch = 1 feel 

function inchToFeet (inch){
    const feet = inch / 12;
    return feet;
}

const feetIs = inchToFeet(60);
console.log(feetIs);



function inchToFeet2 (givenInch){
const feet = givenInch / 12;
 const integer = parseInt (feet);
 const inch = givenInch % 12;
 const result = integer+ 'ft' + ' ' + inch  + 'inch';
 return result;
}

const height = inchToFeet2(75);
console.log(height);




// miles to kilometer 
function milesToKm (miles){
    const km = miles * 1.60934;
    return km;
}

const result = milesToKm(20);
console.log(result);