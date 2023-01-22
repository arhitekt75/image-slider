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

// kreiranje arrow funkcije
const moveLeft = ()=>{
    displayNone();
    imgNum--;

    if(imgNum === -1) {
        imgNum = pictures.length - 1;
    }

    pictures[imgNum].style.display = 'block';
}

const moveRight = ()=>{
    displayNone();
    imgNum++;

    if (imgNum === pictures.length) {
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
}

 // event listeneri za strelice
leftBtn.addEventListener('click', moveLeft );

rightBtn.addEventListener('click', moveRight );


// sakrivanje svih slika po defaultu
const displayNone = ()=>{
    pictures.forEach((img) => {
        img.style.display='none';
    }); 
    
}




// kreiranje portfolija

const portfolioSort = (button)=> {
    let category = button.getAttribute('data-category');
    let boxItem = document.querySelectorAll('.box');

    boxItem.forEach((e)=>{
        e.style.display ='none';
    });

    if(category === 'sve'){
        boxItem.forEach((e)=>{
            e.style.display ='block';
        });
    };

    boxItem.forEach((e)=>{
        if(e.getAttribute('data-category').includes(category)){
            e.style.display = 'block';
        };
    });
};



// kreiranje modal box-a
let modalBtn = document.querySelector('#modal-btn');
let modalBox = document.querySelector('.modal-box');
let overlay = document.querySelector('.modal-overlay');

const startModal = ()=>{
    modalBox.style.display = 'block';
    overlay.style.display = 'block';
}

const stopModal = ()=>{
    modalBox.style.display = 'none';
    overlay.style.display = 'none';
}

modalBtn.addEventListener('click', startModal);