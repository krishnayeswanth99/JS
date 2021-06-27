'use strict';
let highScore = 0;
let guess = Math.trunc(Math.random()*20)+1;
console.log(guess);

const init = function(color) {
    document.body.style.backgroundColor=color;
    document.querySelector(".highscore").textContent=highScore;
}

const setValues = function (msg, score){
    // console.log(msg,score);
    document.querySelector(".message").textContent=msg;
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value="";
}

document.querySelector('.check').addEventListener
    ('click', () =>{
        // let ele = document.getElementsByClassName("score");
        // let score = Number(ele[0].textContent);
        let score = Number(document.querySelector('.score').textContent);

        const val = Number(document.querySelector(".guess").value);
        if(!val){
            document.querySelector(".message")
            .textContent="No Number";
            return;
        } 
        if(val==guess){
            highScore=Math.max(highScore,score);
            init('#60b347');
            setValues("Correct Number!!",score);
            document.querySelector('.number').textContent=guess;
            return;
        }
        if(score==1){
            document.querySelector("h1").textContent="Try Again!";
            alert("Please Try Again!!");
            return;
        }score--;
        if(val<guess){
            setValues("Number is low",score);
        }else{
            setValues("Number is High",score);
        }
    });

document.querySelector(".again").addEventListener("click",() => {
    init('#222');
    guess=Math.trunc(Math.random()*20)+1;
    setValues("Start guessing...",20);
    document.querySelector('.number').textContent="?";
    console.log(guess);
});