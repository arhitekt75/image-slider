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
    displayNone();
    imgNum--;

    if(imgNum === -1) {
        imgNum = pictures.length - 1;
    }

    pictures[imgNum].style.display = 'block';
});

rightBtn.addEventListener('click', ()=>{
    displayNone();
    imgNum++;

    if (imgNum === pictures.length) {
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
});

// sakrivanje svih slika po defaultu
const displayNone = ()=>{
    pictures.forEach((img) => {
        img.style.display='none';
    }); 
    
}