let string = "";
const buttons = document.querySelectorAll(".btn");
// console.log(buttons)/
let input_field = document.querySelector('input');
let btn_arr = Array.from(buttons)
btn_arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e)
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input_field.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = " ";
            input_field.value = string;
        }
        else if (e.target.innerHTML === 'x') {
            string = input_field.value.slice(0, -1);
            input_field.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            input_field.value = string;
        }
    })
})