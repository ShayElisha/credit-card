document.querySelector('.card-number-input').oninput = () =>{
  document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
  document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
  document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
  document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
  document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
  document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';

 
}
document.querySelector('.cvv-input').onmouseleave = () =>{
  document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
  document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}


document.querySelector('.cvv-input').oninput = () =>{
  document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

const input = document.querySelector('.card-number-input');

input.addEventListener('keyup',() => {
  let value = input.value;
  
  // Remove all non-digit characters
  value = value.replace(/\D/g,'');  

  // Format on blur
  if(value.length > 4) {
    value = value.slice(0,4) + '-' + value.slice(4);
  }
  if(value.length > 9){
    value = value.slice(0,9) + '-' + value.slice(9);
  }
  if(value.length > 14){
    value = value.slice(0,14) + '-' + value.slice(14);
  }

  input.value = value;
});
