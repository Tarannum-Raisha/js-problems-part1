


const age =[ 10, 17, 40, 50, 21, 10, 17, 20 ,21 ];
function duplicate (number){

    let unique = [];
    for(const items of number){
        if(unique.includes(items) === false){
            unique.push(items);
        }
    }
    return unique;


}
const name =['tahmid', 'tawsif', 'ammu', 'baba','tahmid','tawsif', 'raisha '];
const input = duplicate(name);
console.log(input);
const inAge = duplicate(age);
console.log(inAge);