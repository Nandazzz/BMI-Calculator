function bmiCalculator() {
  let weight = document.getElementById("weight-kg").value;
  let height = document.getElementById("height-cm").value;
  let bmi = weight / Math.pow(height / 100, 2);
  let result = document.getElementById("result");
  if (bmi < 18.5) {
    result.textContent = `Your BMI is ${
      Math.round(bmi * 10) / 10
    } which means You are. Underweight`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result.textContent = `Your BMI is ${
      Math.round(bmi * 10) / 10
    } which means You are. Normal weight`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    result.textContent = `Your BMI is ${
      Math.round(bmi * 10) / 10
    } which means You are. Overweight`;
  } else {
    result.textContent = `Your BMI is ${
      Math.round(bmi * 10) / 10
    } which means You are. Obesity`;
  }
  return false;
}
