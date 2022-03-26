//Gets input values
function getInputValues(a) {
    const name = document.getElementById("nameTxt" + a).value;
    const age = document.getElementById("ageTxt" + a).value;
    const birthday = document.getElementById("birthdayDate" + a).value;
    const maritalStatus = document.getElementById("maritalStatusSel" + a).value;
    const haveKids = document.getElementById("hasKidsChk" + a).checked;  
    
    return {name, age, birthday, maritalStatus, haveKids};
}

//Inserts users in the HTML
function insertUserHTML(op, id, name, age, birthday, maritalStatus) {
    let htmlRow = "<tr id=" + "'" + id + "'>" + "<td><input type='radio' name='group' onchange='enableButtons()'></td>" + "<td>" + id + "</td>" + "<td>" + name + "</td>" + "<td>" + age + "</td>" + "<td>" + birthday + "</td>" + "<td>" + maritalStatus + "</td>" + "<td>" + op + "</td></tr>";
    document.querySelector("tbody").innerHTML += htmlRow;
    clearInputs();
}

//Inserts modify user in the HTML
function modifyUserHTML(op, id, name, age, birthday, maritalStatus){
    let htmlRow = "<td><input type='radio' name='group' onchange='enableButtons()'></td>" + "<td>" + id + "</td>" + "<td>" + name + "</td>" + "<td>" + age + "</td>" + "<td>" + birthday + "</td>" + "<td>" + maritalStatus + "</td><td>" + op + "</td>";
    document.getElementById(id).innerHTML = htmlRow;
}




//Searches for a user in the array, and checks if that user is active
function userExist(id) {
    for (var i = 0; i <= array_Users.length; i++) {
        if (i == id && array_Users[i].state === true) {
            return true;
        }
    }
    return false;
}

//Tests text input before create or modify a user
function validateNameAge(name, age) {
    const regExpName = /^[A-Za-z]+$/g;
    const regExpAge = /^[0-9]{2}$/g;
    if (regExpName.test(name) && regExpAge.test(age)) {
        return true;
    } else {
        return false;
    }
}

//Checks if the fields are empty or not
function isNotBlank(input) {
    return input != "";
}




//Enables the modify and delete buttons
function enableButtons(){
    document.querySelector('input[data-target="#mod"]').disabled = false;
    document.querySelector('input[data-target="#del"]').disabled = false;
}

//Disables the modify and delete buttons
function disableButtons() {
    document.querySelector('input[data-target="#mod"]').disabled = true;
    document.querySelector('input[data-target="#del"]').disabled = true;
}

//Unchecks the radio button
function unCheck() {
    let checkedElement =  document.querySelector('input[name="group"]:checked');
    if (checkedElement) {
        checkedElement.checked = false;
    } 
}




//A function that clears data after the creation of a user
function clearInputs() {
    document.getElementById("nameTxt").value = "";
    document.getElementById("ageTxt").value = "";
    document.getElementById("birthdayDate").value = "";
    document.getElementById("hasKidsChk").checked = false;
}

//A function that clears data after search a user
function clearSearchInput() {
    document.getElementById("searchTxt").value = " ";
}




//Sets the values of a user previously selected
function modifyPrimButton() {
    let id = document.querySelector('input[name="group"]:checked').parentNode.parentNode.id;
    document.getElementById("nameTxt1").value = array_Users[id].name;
    document.getElementById("ageTxt1").value = array_Users[id].age;
    document.getElementById("birthdayDate1").value = array_Users[id].birthday;
    document.getElementById("maritalStatusSel1").value = array_Users[id].maritalStatus;
    document.getElementById("hasKidsChk1").checked = array_Users[id].haveKids;
}