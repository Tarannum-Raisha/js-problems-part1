

function evenAvarage (numbers){
   
    const evenNumber = [];
    for(const number of numbers){
        if(number % 2 ===0){
          
            evenNumber.push(number);
           
        }
    }
    
    const divided = evenNumber.length;
    let sum = 0;
    for(const sumOf of evenNumber){
       
        sum = sum + sumOf;
       
    }
    console.log(sum, divided);
    const avg = sum / divided;
    return avg;


}

const number = [12,4,23,45,34,46,2,5,7,6,8,86];
const isEven = evenAvarage(number);
console.log('avarage of the even numbers', isEven);