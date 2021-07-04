const but = document.querySelector("#btn");


but.addEventListener('click',function(){
    
    const color = randColor();
    document.body.style.backgroundColor= color;
    
    document.querySelector("h1").textContent = color;
    
})

function randColor() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}