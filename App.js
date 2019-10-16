// Вычисление факториала рекурсивным способом
function getFactorial(n) {
    if(n === 1) {
        return 1;
    }
    else {
        return n * getFactorial(n - 1);
    }
}
let result = getFactorial(4);
console.log(result);