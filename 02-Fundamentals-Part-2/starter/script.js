/*
const dolphinsScores = [44, 23, 71];
const koalasScores = [65, 49, 54];

const avg = scores => {
    let cnt = 0;
    for(let i in scores)
        cnt+=scores[i];
    return cnt/scores.length;
}

const scoreDolphins = avg(dolphinsScores);
const scoreKoalas = avg(koalasScores);

if(scoreDolphins > 2*scoreKoalas)
    console.log(`Dolphins win`);
else if(scoreKoalas > 2*scoreDolphins)
    console.log(`Koalas wins`);
else
    console.log(`Draw`);
*/
/*
const firstName = `joker`;
const subArr = [1,null, undefined, false, 'Hello'];
const arr = [firstName, 231 - 123, subArr];
console.log(arr);
console.log(123-arr); // Nan

console.log(subArr);
console.log(subArr.push(321)); // returns new length
console.log(subArr.unshift(123)); // returns new length
console.log(subArr.pop()); // returns popped element
console.log(subArr.shift()); // returns popped element
console.log(subArr);
console.log(subArr.indexOf(null)); // index of element
console.log(subArr.indexOf(0)); // index of no element (-1)
console.log(subArr.includes(null)); // Boolean check
*/
/*
const tip = amt => amt>50 && amt<300? amt*0.15: amt*0.2;

const bills = [125, 555, 44];
const tips = []; // const tips, tot = [], []; doesn't work
const totals = [];

for(let i=0; i<bills.length;i++){
    tips.push(tip(bills[i]));
    totals.push(bills[i]+tips[i]);
}

console.log(bills, tips, totals);
*/
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Leon',
    job: "teacher",
    location: 'India',
    friends: ["Michael", "Peter", "Steven"],
    birthYear: 1991,
    calcAge: function() { // arrow functions no this scope (or global scope for this)
        console.log(this);
        return 2037-this.birthYear;
    }
};
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
console.log(jonas.calcAge());
console.log(jonas['calcAge']());
*/