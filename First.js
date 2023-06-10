// // Find the biggest number in this array

// var numbers = [101,202,33,44,55,66,77,88,99];

// var max = numbers[0];

// for(let i=0; i < numbers.length; i++){
//     if(numbers[i] > max){
//         max = numbers[i];
//     }
// }
// console.log(max);


// get odd numbers of an array and get odd sum of an array

function odd_num(number){

    var sum = 0;

    for(var i=0; i<numbers.length; i++){

        var index = i;
        var arrayIndex = numbers[index]

        if(arrayIndex %2 != 0){
            sum = sum + arrayIndex;
        }
    }
    console.log(sum);
}
var numbers = [121,22,33,494,55,66,77,88,909];
var odd_num = odd_num(numbers)