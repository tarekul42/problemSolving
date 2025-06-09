// get odd numbers of an array and get odd sum of an array
const numbers = [11, 202, 303, 44, 44, 55, 66, 77, 88, 99];

function odd_num(numbers){

    let sum = 0;

    for(let i=0; i<numbers.length; i++){


        let index = i;
        let arrayIndex = numbers[index];

        if(arrayIndex %2 !== 0){
            sum = sum + arrayIndex;
        };
    };
    console.log(sum);
};

const odd_nums = odd_num(numbers)
