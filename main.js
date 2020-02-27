const randomArray = function getRandomArray(length, min, max) {
    let array = [];
    
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor((min + Math.random()*(max+1-min)));
        array[i]= randomNumber;      
    }
    return array;
}
const printRandomArray = randomArray(15,1,100); 
console.log('Масив случайных целых чисел:');
console.log(printRandomArray);


const filter = function filterEvenNumbers(...numbers) {
    let number = numbers.filter(num => (parseFloat(num) - parseInt(num) ===0));
    const filtered = number.filter(num => (num%2==0));
    return filtered;
}
const printFilterNum = filter(1,2,3,4,5,6,7,8,8.2,8.1,9); 
console.log('Масив четных чисел:');
console.log(printFilterNum);


const average = function getAverage(...numbers) {
    let number = numbers.filter(num =>((parseFloat(num) - parseInt(num)===0)));
    let numsToSum = number.reduce((a,b)=>(a+b),0);
    let avaregeNum = numsToSum/number.length;
    return avaregeNum;
}
const printAverage = average(1,2,3,4,5,6,7,8,9); 
console.log('Среднее арифмметическое:');
console.log(printAverage);



const countPositiveNumbers = function positiveNumbers(...numbers) {
    let number = numbers.filter(num =>((parseFloat(num) - parseInt(num)===0)));
    let filtered = numbers.filter(num => (num>0));
    let sum = filtered.length;
    return sum;
}
const printCountPositive = countPositiveNumbers(0,-5,2,6,74,92,-85,-90,1); 
console.log('Количиство чисел больших 0:');
console.log(printCountPositive);


const getDividedByFive = function divideByFive(...numbers) {
    const filtered = numbers.filter(num => (num%5==0 && num!==0));
    return filtered;
}
const printDividedByFive = getDividedByFive(0,5,10,5.1,55,77,11); 
console.log('Числа которые делятся нацело на 5:');
console.log(printDividedByFive);


const getMedian = function median(...numbers) {
    let number = numbers.filter(num =>((parseFloat(num) - parseInt(num)===0)));
    let sort = number.sort((a,b) => a - b);
    let median = [];
    if (numbers % 2 === 0){
        median = (sort[(sort.length/2)-1]+sort[sort.length/2])/2;
    }else {
        median = sort[Math.floor(sort.length/2)];
    }
    return median;
}
const printGetMedian = getMedian(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2); 
console.log('Медиана (6,2,55,11,78,2,55,77,57,87,23,2,56,3,2):');
console.log(printGetMedian);