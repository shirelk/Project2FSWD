// function checkData(){
//     var enterUser=document.getElementById('username').value;
//     var enterPass= document.getElementById('password').value;

//     //get data from localStorage
//     var getUser=localStorage.getItem('userName');
//     var getPwd=localStorage.getItem('userPwd');

//     if(enterUser==getUser)
//     {
//         if(enterPass==getPwd)
//         {
//             alert("login successful");
//         }
//         else
//         {
//             alert("wrong password")
//         }
//     }
//     else
//     {
//         alert("invalid details");
//     }
// }


//check if the data from the SignUp is match
function checkData() {
    let flag = validateFildes();
    if (flag == true) {
        let userLoggedIn = {
            "loggedIn": true,
            "username": document.getElementById("username").value
        }
        localStorage.setItem("userLoggedIn", JSON.stringify(userLoggedIn));
        return true;
    } 
    else {
        alert("wrong username or password");
        return false;
    }
}

function validateFildes() {
    enteredUsername = document.getElementById("username").value;
    enteredPassword = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem(enteredUsername));

    if (user != undefined) {
        password = user['password'];
        if (enteredPassword == password) {
            return true;
        }
    }
    return false;
}




