'use strict';

const btns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const openModalFunc = function(){
    console.log('Modal Button!');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModalFunc = function(){
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
};

for(let i=0;i<btns.length;i++)
    btns[i].addEventListener('click',openModalFunc);

closeModal.addEventListener('click',closeModalFunc);
overlay.addEventListener('click',closeModalFunc);
document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && !modal.classList.contains('hidden'))
        closeModalFunc();
});