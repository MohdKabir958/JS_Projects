const form = document.getElementById('MyForm')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('Weight').value);
    const result = document.getElementById('result');
    const result2 = document.getElementById('result2');

    result.style.fontSize = '1.5em';
    result.style.color = 'red';
    result2.style.color = 'red';
    result2.style.fontSize = '1.5em';

    if (height === "" || height <= 0 || isNaN(height)) {
        result.innerHTML = `Please enter valid Height`
    }
    else if (weight === "" || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Please enter valid Weight`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span style='color:white'>${bmi}</span>`;

        if (bmi < 18.4) {
            result2.innerHTML = `<br><span style='color:red'>You are underweight</span>`
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            result2.innerHTML = `<br><span style='color:white'>You are Normal</span>`
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            result2.innerHTML = `<br><span style='color:red'>You are Over Weight</span>`
        }
        else {
            result2.innerHTML = `<br><span style='color:red'>You are Obese</span>`
        }
    }
}, false);
