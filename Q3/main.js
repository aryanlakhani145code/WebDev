// Getting header of the number
let numdiv = document.getElementById("aryan");

// number initially set 0
let num = 0;

// accessing buttons using IDs
let add = document.getElementById("inc");
let sub = document.getElementById("dec");

// adding functionality to button 
add.addEventListener("click", () => {
    ++num;
    numdiv.innerHTML = num;
})

sub.addEventListener("click", () => {
    if (num > 0){
        --num;
        numdiv.innerHTML = num;
    }
    else {
        numdiv.innerHTML = 0;
    }
})
