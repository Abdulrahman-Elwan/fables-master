// create counter
let nums = document.querySelectorAll(".nums .num");
let sec = document.querySelector(".creativity")
let started = false;
window.onscroll = function(){
    if(window.scrollY >= sec.offsetTop){
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};
function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=> {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    }, 3000 / goal);
}
