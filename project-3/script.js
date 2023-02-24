let search = document.getElementById('search');
let input = document.getElementById('input');
let button = document.getElementById('button');
console.log(input);
button.addEventListener("click", function(){
    input.classList.toggle("active");
    input.focus();
})