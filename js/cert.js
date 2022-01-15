document.onselectstart = function(){
    return false;
}
let loader = document.querySelector('.loader');
window.onload = function () {
    setTimeout(() => {
        loader.parentNode.removeChild(loader);
    }, 2000);
};



let overRide= document.querySelectorAll(".over-ride");
let btn = document.querySelectorAll(".fill");
let blur = document.querySelectorAll(".certificate-img");

for(let i=0; i < btn.length; i++){
    btn[i].addEventListener("click", ()=>{

        hideOthers()

        blur[i].classList.add('active')
        overRide[i].classList.add('active')
    });
}

function hideOthers(){
    for(let i=0; i < btn.length; i++){
    blur[i].classList.remove('active')
    overRide[i].classList.remove('active')}
}