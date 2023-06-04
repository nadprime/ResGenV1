function addNewWEField() {
  // console.log("New Field Added");
  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('weField');
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField() {

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('eqField');
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);

}

function generateCV() {
  let nameField = document.getElementById('nameField').value;

  let nameT1 = document.getElementById('nameT1');

  nameT1.innerHTML = nameField;

  //Name
  document.getElementById("nameT2").innerHTML = nameField;

  //Contact
  document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

  //Address
  document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

  //Github
  document.getElementById("ghT").innerHTML = document.getElementById("ghField").value;

  //Twitter
  document.getElementById("twitT").innerHTML = document.getElementById("twitField").value;

  //LinkedIn
  document.getElementById("linkedT").innerHTML = document.getElementById("LinkedField").value;

  //Objective
  document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

  //Work Experience
  let wes = document.getElementsByClassName("weField");

  let str = "";


  for(let e of wes)
  {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str;

  //Academic Qualification

  let aqs = document.getElementsByClassName("eqField");

  let str1 = "";

  for(let e of aqs)
  {
    str1 += `<li> ${e.value} </li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
    
}

//Print CV

function printCV()
{
  window.print();
}
