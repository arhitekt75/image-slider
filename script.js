let openBtn = document.querySelector('#open-btn');
let closeBtn = document.querySelector('#close-btn');
let hiddenMenu = document.querySelector('.hidden-menu');

openBtn.addEventListener('click', ()=>{
   hiddenMenu.style.display='block';
});

closeBtn.addEventListener('click', ()=>{
    hiddenMenu.style.display='none';
});