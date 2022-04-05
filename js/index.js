document.onselectstart = function(){
    return false;
}
let loader = document.querySelector('.loader');
window.onload = function () {
    setTimeout(() => {
        loader.parentNode.removeChild(loader);
    }, 2000);
};

document.ready = function() {
    if(window.width()<=800){
        document.querySelector('#character').remove();
    }       
};

let sectionTwo = document.querySelector(".two");
let sectionThree = document.querySelector(".thre");

let imgTwo = document.querySelector(".imgTwo");
let imgThree = document.querySelector(".imgThree");

let textBoxTwo = document.querySelector(".textBoxTwo");
let textBoxThree = document.querySelector(".textBoxThree");


document.addEventListener('scroll', function () {
    const clientHeight = document.documentElement.clientHeight;

    const secondSectiony = sectionTwo.getBoundingClientRect().y;
    const secondSectionHeight = sectionTwo.getBoundingClientRect().height;
    if (clientHeight > secondSectiony + secondSectionHeight * 1 / 3) {
        imgTwo.style.animation = 'img .8s forwards';
        textBoxTwo.style.animation = 'textBox .8s forwards';
    }


    const thirdSectiony = sectionThree.getBoundingClientRect().y;
    const thirdSectionHeight = sectionThree.getBoundingClientRect().height;
    if (clientHeight > thirdSectiony + thirdSectionHeight * 1 / 3) {
        imgThree.style.animation = 'img .8s forwards';
        textBoxThree.style.animation = 'textBox .8s forwards';
    }
  
    
});

//maintaince prompt

let maintenance = document.querySelector(".maintenancePrompt");
let click = document.querySelectorAll(".notice");
let blur = document.querySelector(".cover");


for(let i = 0; i < click.length; i++){
     click[i].addEventListener('click', function () {
         maintenance.style.display = 'flex';
       blur.style.filter = 'blur(8px)';
    });
 }

 let promptBtn = document.querySelector(".promptBtn");
 promptBtn.addEventListener('click', function(){
     maintenance.style.display = 'none';
         blur.style.filter = 'blur(0px)';
// })
