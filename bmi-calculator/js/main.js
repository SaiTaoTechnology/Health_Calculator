function validateInput() {
  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;

  if (height < 100 || height > 250) {
    document.querySelector('.error-msg').innerHTML = 'Height must be 100-250 cm';
    return false;
  }

  if (weight < 30 || weight > 200) {
    document.querySelector('.error-msg').innerHTML = 'Weight must be 30-200 kg';
    return false;
  }

  return true; 
}

function calculateBMI() {

  if (!validateInput()) {
    return false;
  }

  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;

  let bmi = weight / (height / 100) ** 2;

  let resultText;
  if (bmi < 18.5) {
    resultText = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    resultText = 'Normal';
  } else if (bmi >= 25 && bmi < 30) {
    resultText = 'Overweight';
  } else {
    resultText = 'Obese';
  }

  document.getElementById('result').innerHTML = 
    'Your BMI is ' + bmi + '. This means you are in the ' + resultText + ' category.';
  
  return false; 
}

function onFormSubmit() {
  event.preventDefault();
  let bmiResult = calculateBMI();
  
  document.getElementById('result').innerHTML = bmiResult;

  return false;
}