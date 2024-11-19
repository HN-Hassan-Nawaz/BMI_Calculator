const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');


    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Plz enter a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        console.log(weight)
        results.innerHTML = `plz enter a valid weight ${weight}`;
    }
    else {
        results.innerHTML = "";
        const bmi = ((weight / ((height * height) / 10000)).toFixed(2));
        results.innerHTML = ` <span>${bmi}</span>`;

        if (bmi < 18.6) {
            results.innerHTML = `Cal... BMI is ${bmi} and it is Under Weight`
        }
        else if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML =`Cal... BMI is ${bmi} and it is Normal Weight`
        }
        else {
            results.innerHTML = `Cal... BMI is ${bmi} and it is Overweight Weight`
        }
    }
});