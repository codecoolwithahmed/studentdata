import { userInfo } from "./signup.js";
// import { flag } from "./signup.js";

let signIn = document.getElementById('signin')
let email1 = document.getElementById('email1')
let password1 = document.getElementById('password1')

// localstorage
let userInformation = JSON.parse(localStorage.getItem('userInfo'))
// let flagchecker = JSON.parse(localStorage.getItem('flag'))
// ===
    if (signIn && email1 && password1) {
        signIn.addEventListener('click', () => {
        if (userInformation) {
            for (let i = 0; i < userInformation.length; i++) {
                if (userInformation[i].email === email1.value && userInformation[i].password === password1.value) {
                    Swal.fire({
                        title: "Good Job",
                        text: "Account Succefully Logged In!",
                        icon: "success"
                    });
                    window.location.href = '../Pages/studentdata.html'
                } else if (userInformation[i].email !== email1.value || userInformation[i].password !== password1.value) {
                    Swal.fire({
                        title: "Oops...!",
                        text: "Password or Email is Incorrect!",
                        icon: "error"
                    });
                }else if (email1.value === "" || password1.value === "") {
                    Swal.fire({
                        title: "Oops...!",
                        text: "Please Fill All The Fields!",
                        icon: "error"
                    });
                }
            }
        }
        else {
            Swal.fire({
                title: "Oops...!",
                text: "Please Create Account First!",
                icon: "error"
            });
            
        }
    })
}

console.log(userInformation);


console.log(userInfo);
