let array_Users = new Array();

//User constructor
function User(name, age, birthday, maritalStatus, haveKids, state) {
    this.name = name;
    this.age = age;
    this.birthday = birthday;
    this.maritalStatus = maritalStatus;
    this.haveKids = haveKids;
    this.state = false;
}

//Adds a user
function addUser() {
    const values = getInputValues("");

    if (isNotBlank(values.birthday)){
        if (validateNameAge(values.name, values.age)) {
            let user = new User(values.name, values.age, values.birthday, values.maritalStatus, values.haveKids);
            let id = array_Users.length;
            user.state = true;
            array_Users.push(user);
            let haveKidsStr = user.haveKids === true ? "Yes" : "No";
            insertUserHTML(haveKidsStr, id, user.name, user.age, user.birthday, user.maritalStatus);
        } else {
            alert("Name must be only letters, and the age must be a number until 2 digits");
        }
    } else {
        alert("All the fields must be filled");
    }
}


//Modifies a user
function modifyUser(){
    const values = getInputValues(1);
    // Get input checked input->td->tr and then get the id attribute
    let id = document.querySelector('input[name="group"]:checked').parentNode.parentNode.id;

    if (isNotBlank(values.birthday)){
        if (validateNameAge(values.name, values.age)) {
            let selectedUser = array_Users[id];
            selectedUser.name = values.name;
            selectedUser.age = values.age;
            selectedUser.birthday = values.birthday;
            selectedUser.maritalStatus = values.maritalStatus;
            selectedUser.haveKids = values.haveKids;
            let haveKidsStr = selectedUser.haveKids === true ? "Yes" : "No";
            modifyUserHTML(haveKidsStr, id, selectedUser.name, selectedUser.age, selectedUser.birthday, selectedUser.maritalStatus);
            $('#mod').modal('hide');
            disableButtons();
        } else {
            alert("Name must be only letters, and the age must be a number until 2 digits");
        }
    } else {
        alert("All the fields must be filled");
    }
}


//Deletes a user
function DeleteUser() {
    // Get input checked input->td->tr and then get the id attribute
    let id = document.querySelector('input[name="group"]:checked').parentNode.parentNode.id;
    if (confirm("Are you sure of deleting the user?") == true) {
        document.getElementById(id).innerHTML = ' ';
        array_Users[id].state = false;
    } else {
        unCheck();
    }
}


//Searches for a user
function searchUser() {
    const regExpId = /^[0-9]+$/g;
    let id = document.getElementById("searchTxt").value;
    if (regExpId.test(id)) {
        if (userExist(id)) {
            let element = document.getElementById(id);
            element.classList.add("highlight");
            window.setTimeout(function () {
                element.classList.remove("highlight");
            }, 6000);
            element.scrollIntoView({
                behavior: 'smooth'
            });
            clearSearchInput();
        } else {
            alert("User doesn't exist");
            clearSearchInput();
        }
    } else {
        alert("Must be an ID number");
        clearSearchInput();
    }
}




document.getElementById('addButton').addEventListener("click", addUser);
document.querySelector('input[data-target="#add"]').addEventListener("click", disableButtons);
document.getElementById("add").addEventListener("focus", unCheck);

document.getElementById('modifyButton').addEventListener("click", modifyUser);
document.querySelector('input[data-target="#mod"]').addEventListener("click", modifyPrimButton);


document.querySelector('input[data-target="#del"]').addEventListener("click", DeleteUser);
document.querySelector('input[data-target="#del"]').addEventListener("focusout", disableButtons);

document.getElementById("searchButton").addEventListener("click", searchUser);
document.querySelector('input[data-target="#sea"]').addEventListener("click", disableButtons);
document.getElementById("sea").addEventListener("focus", unCheck);