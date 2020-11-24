const dropdown1 = document.getElementById('dropdown1');
const dropdown2 = document.getElementById('dropdown2');
const refresh = document.getElementById('refresh-btn');
const submit = document.getElementById('submit-btn');
const resultBox = document.getElementById('result');
let output = document.getElementById('output');

let input;
let selectedOptionBox1;
let selectedOptionBox2;

refresh.onclick = (event) => {
  event.preventDefault();
  location.reload();
};

dropdown1.onclick = (event) => {
  event.preventDefault();
  selectedOptionBox1 = dropdown1.value;

  $(document).ready(function(){  
    $("select").on('focus', function () {
      $("select").find("option[value='"+ $(this).val() + "']").attr('disabled', false);
    }).change(function() {
      $("select").not(this).find("option[value='"+ $(this).val() + "']").attr('disabled', true);
    });
  }); 
};

dropdown2.onclick = (event) => {
  event.preventDefault();
  selectedOptionBox2 = dropdown2.value;
};

calculate = (number) => {
  if (selectedOptionBox1 === 'hours' && selectedOptionBox2 === 'days') {
    let hoursToDays = number / 24;
    let days = Math.floor(hoursToDays);
    let daysDecimals = (hoursToDays % 1);
    let daysToHours = daysDecimals * 24;
    let hours = Math.round(daysToHours);

    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${days} dias e ${hours} horas`;
  } 
  
  if (selectedOptionBox1 === 'hours' && selectedOptionBox2 === 'months') {
    let hoursToMonths = number / 720;
    let months = Math.floor(hoursToMonths);
    let monthsDecimals = (hoursToMonths % 1);
    let hoursToDays = monthsDecimals * 30;
    let days = Math.floor(hoursToDays);
    let daysDecimals = (hoursToDays % 1);
    let daysToHours = daysDecimals * 24;
    let hours = Math.round(daysToHours);

    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${months} meses, ${days} dias e ${hours} horas`;    
  } 
  
  if (selectedOptionBox1 === 'hours' && selectedOptionBox2 === 'years') {
    let hoursToYears = number / 8760;
    let years = Math.floor(hoursToYears);
    let yearsDecimals = (hoursToYears % 1);
    let hoursToMonths = yearsDecimals * 12;
    let months = Math.floor(hoursToMonths);
    let monthsDecimals = (hoursToMonths % 1);
    let hoursToDays = monthsDecimals * 30;
    let days = Math.floor(hoursToDays);
    let daysDecimals = (hoursToDays % 1);
    let daysToHours = daysDecimals * 24;
    let hours = Math.round(daysToHours);

    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${years} anos, ${months} meses, ${days} dias e ${hours} horas`;    
  }
  
  if (selectedOptionBox1 === 'days' && selectedOptionBox2 === 'hours') {
    let hours = number * 24;

    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${hours} horas`;
  } 
  
  if (selectedOptionBox1 === 'days' && selectedOptionBox2 === 'months') {
    let daysToMonths = number / 30;
    let months = Math.floor(daysToMonths);
    let monthsDecimals = (daysToMonths % 1);
    let daysToDays = monthsDecimals * 30;
    let days = Math.round(daysToDays);

    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${months} meses e ${days} dias`;
  } 
  
  if (selectedOptionBox1 === 'days' && selectedOptionBox2 === 'years') {
    let daysToYears = number / 365;
    let years = Math.floor(daysToYears);
    let yearsDecimals = (daysToYears % 1);
    let daysToMonths = yearsDecimals * 12;
    let months = Math.floor(daysToMonths);
    let monthsDecimals = (daysToMonths % 1);
    let daysToDays = monthsDecimals * 30;
    let days = Math.round(daysToDays);

    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${years} anos, ${months} meses e ${days} dias`;    
  } 
  
  if (selectedOptionBox1 === 'months' && selectedOptionBox2 === 'hours') {
    let hours = number * 720;
    
    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${hours} horas`;    
  } 
  
  if (selectedOptionBox1 === 'months' && selectedOptionBox2 === 'days') {
    let days = number * 30;
    
    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${days} dias`;    
  } 
  
  if (selectedOptionBox1 === 'months' && selectedOptionBox2 === 'years') {
    let monthsToYears = number / 12;
    let years = Math.floor(monthsToYears);
    let yearsDecimals = (monthsToYears % 1);
    let monthsToMonths = yearsDecimals * 12;
    let months = Math.round(monthsToMonths);
    
    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${years} anos e ${months} meses`;
  } 
  
  if (selectedOptionBox1 === 'years' && selectedOptionBox2 === 'hours') {
    let hours = number * 24;
    
    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${hours} horas`;
  } 
  
  if (selectedOptionBox1 === 'years' && selectedOptionBox2 === 'days') {
    let days = number * 365;
    
    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${days} dias`;
  } 
  
  if (selectedOptionBox1 === 'years' && selectedOptionBox2 === 'months') {
    let months = number * 12;
    
    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${months} meses`;
  
  } 
  
  /*if (selectedOptionBox1 === 'hours' && selectedOptionBox2 === 'working') {
    let working = number / 40;
    let weeks = Math.floor(working);
    let days = (working % 1);
    
    // 1200 hours / 8h dia = 150 dias / 5 dias por semana = 30 semanas * 4 semanas por mês = 7.5 meses
    // 1200 hours / (8h dia * 5 dias semana = 40 horas por semana)

    resultBox.setAttribute('style', 'display: inherit');
    output.innerHTML = `${weeks} semanas and ${days} dias`;

  } else if (selectedOptionBox1 === 'days' && selectedOptionBox2 === 'working') {
    let days = number / 40;
    let days = number / 8;
    
    resultBox.setAttribute('style', 'display: inherit');
    output.innerHTML = `${weeks} semanas | ${days} dias`;
  }*/
}

submit.onclick = (event) => {
  event.preventDefault();
  
  input = document.querySelector('#input-number');
  calculate(input.value);
};
