'use strict';
/*
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

// console.log(`Mark's BMI: ${massMark / heightMark**2}`);
// console.log(`John's BMI: ${massJohn/(heightJohn*heightJohn)}`);

const BMI = (mass, height) => mass/height**2; 

const bmiMark = BMI(massMark, heightMark);
const bmiJohn = BMI(massJohn, heightJohn);

if(bmiMark > bmiJohn)
    console.log(`Mark has higher BMI`);
else if(bmiJohn > bmiMark)
    console.log(`John has higher BMI`);
else
    console.log(`All are equals`);
*/
/*
const dolphinScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

const avg = scores => {
    let tot = 0;
    for(let i in scores)
        tot+=scores[i];
    
    return tot/scores.length;
}

console.log(`Avg Scores of Dolphins: ${avg(dolphinScores)}`);
console.log(`Avg Scores of Koalas: ${avg(koalasScores)}`);
*/

const amt = 250;

const tip = bill => bill>50 && bill<300? bill*0.15: bill*0.2;
const tamt = bill => bill + tip(bill);

console.log(`Bill Amount: ${amt}
Tip Amount: ${tip(amt)}
Total Amount: ${tamt(amt)}`);
console.log("Bill Amount: "+amt+"\n\
Tip Amount: "+tip(amt)+"\n\
Total Amount: "+tamt(amt));

