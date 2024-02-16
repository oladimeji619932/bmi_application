let weight = document.querySelector('.weight');
let height = document.querySelector('.height');
let btn = document.querySelector('.submit');

let isVAlid = true;

let weight_err = document.querySelector('.weight_err');
let height_err = document.querySelector('.height_err');
let result = document.querySelector('.result');

btn.addEventListener('click', function(){
    if(weight.value == ''){
        weight_err.innerText = 'weight field is required';
        isVAlid = false;
    }
    if(isNaN(weight.value)){
        weight_err.innerText = 'weight requires a number';
        isVAlid = false;
    }
    if(height.value == ''){
        height_err.innerText = 'Height field is required';
        isVAlid = false;
    }
    if(isNaN(height.value)){
        height_err.innerText ='Height requires a number';
        isVAlid = false;
    }
    
    let bmi = weight.value / (height.value * height.value);
        result.innerText = `${bmi} kg`;

})