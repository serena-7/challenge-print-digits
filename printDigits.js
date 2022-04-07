function printDigits(num){
    let remainder = 0;
    let lastRemainder = 0;
    let digit = 0;
    let modNum = 10;
    let digits = [];
    while(remainder !== num){
        remainder = num % modNum;
        digit = remainder - lastRemainder;
        digit /= modNum/10;
        digits.push(digit);
        // console.log(`Remainder: ${remainder} modNum: ${modNum} digit: ${digit}`);
        
        lastRemainder = remainder;
        modNum *= 10;    
    }
    for(let i = 0; i < digits.length; i++){
        console.log(digits[i]);
    }
}

function printDigits2(num){
    while(num > 0){
        console.log(num % 10);
        num = Math.floor(num/10);
    }
}

// printDigits(314)
printDigits2(1234)