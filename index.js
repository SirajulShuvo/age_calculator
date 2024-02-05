function calculateAge() { 
  let today = new Date();
  let inputBox = document.getElementById('input-box').value;
  let userDay = new Date(inputBox);
  
  let age = today.getFullYear() - userDay.getFullYear();//normal rule
  let month = today.getMonth() - userDay.getMonth();
  let day = today.getDate() - userDay.getDate();

  if((today.getMonth()) < (userDay.getMonth())){
    age--;
    month = month + 12
  }
  if((today.getDate()) < (userDay.getDate())){
    month--;
    day = (today.getDate()+30)-(userDay.getDate());
  }

  document.getElementById("btn1").innerHTML = `${age}`;
  document.getElementById("btn2").innerHTML = `${month}`;
  document.getElementById("btn3").innerHTML = `${day}`;
}
