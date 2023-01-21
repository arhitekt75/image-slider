// kreiranje hamburger menija
let openBtn = document.querySelector('#open-btn');
let closeBtn = document.querySelector('#close-btn');
let hiddenMenu = document.querySelector('.hidden-menu');

openBtn.addEventListener('click', ()=>{
   hiddenMenu.style.display='block';
});

closeBtn.addEventListener('click', ()=>{
    hiddenMenu.style.display='none';
});


// kreiranje img slidera
let leftBtn = document.querySelector('#left-btn');
let rightBtn = document.querySelector('#right-btn');
let pictures = document.querySelectorAll('.img-box img');
let imgNum = 0;

leftBtn.addEventListener('click', ()=>{
    console.log('left')
});

rightBtn.addEventListener('click', ()=>{
    displayNone();
});

// sakrivanje svih slika po defaultu
const displayNone = ()=>{
    pictures.forEach((img) => {
        img.style.display='none';
    }); 
    
}