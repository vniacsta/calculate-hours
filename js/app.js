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
  
  } else if (selectedOptionBox1 === 'hours' && selectedOptionBox2 === 'months') {
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
  
  } else if (selectedOptionBox1 === 'hours' && selectedOptionBox2 === 'years') {
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
  
  } else if (selectedOptionBox1 === 'days' && selectedOptionBox2 === 'hours') {
    let hours = number * 24;

    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${hours} horas`;
  
  } else if (selectedOptionBox1 === 'days' && selectedOptionBox2 === 'months') {
    let daysToMonths = number / 30;
    let months = Math.floor(daysToMonths);
    let monthsDecimals = (daysToMonths % 1);
    let daysToDays = monthsDecimals * 30;
    let days = Math.round(daysToDays);

    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${months} meses e ${days} dias`;

  } else if (selectedOptionBox1 === 'days' && selectedOptionBox2 === 'years') {
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
  
  } else if (selectedOptionBox1 === 'months' && selectedOptionBox2 === 'hours') {
    let hours = number * 720;
    
    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${hours} horas`;    

  } else if (selectedOptionBox1 === 'months' && selectedOptionBox2 === 'days') {
    let days = number * 30;
    
    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${days} dias`;    
    
  } else if (selectedOptionBox1 === 'months' && selectedOptionBox2 === 'years') {
    let monthsToYears = number / 12;
    let years = Math.floor(monthsToYears);
    let yearsDecimals = (monthsToYears % 1);
    let monthsToMonths = yearsDecimals * 12;
    let months = Math.round(monthsToMonths);
    
    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${years} anos e ${months} meses`;
    
  } else if (selectedOptionBox1 === 'years' && selectedOptionBox2 === 'hours') {
    let hours = number * 24;
    
    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${hours} horas`;
    
  } else if (selectedOptionBox1 === 'years' && selectedOptionBox2 === 'days') {
    let days = number * 365;
    
    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${days} dias`;
    
  } else if (selectedOptionBox1 === 'years' && selectedOptionBox2 === 'months') {
    let months = number * 12;
    
    resultBox.setAttribute('style', 'display: inherit');
    output.innerText = `${months} meses`;
  
  } 
}

$(document).bind('pageinit', function(){
  $(submit).vclick(function() {
    input = document.querySelector('#input-number');
    calculate(input.value);
   });
});