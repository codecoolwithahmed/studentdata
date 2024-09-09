let signUp = document.getElementById('signup')
let name = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')

// export let flag = true
export let userInfo = [];
let userData = {}

if(signUp && name && email && password){
    signUp.addEventListener('click', () => {
        userData.name = name.value
        userData.email = email.value
        userData.password = password.value
        if (userData.name === "" || userData.email === "" || userData.password === "") {
            Swal.fire({
                title: "Oops...!",
                text: "Please Fill All The Fields!",
                icon: "error"
            });
            return
        } else if (!userData.email.includes('@gmail.com')) {
            Swal.fire({
                title: "Oops...!",
                text: "Email Should Include '@gmail.com' ",
                icon: "error"
            });
            return
        } else {
            Swal.fire({
                title: "Good job!",
                text: "Account Succefully Created!",
                icon: "success"
            });
            // flag = false;
            // console.log(flag);
            
            userInfo.push({ ...userData });
            window.location.href = '../Pages/studentdata.html'
            
        }

        // localstorege
        // localStorage.setItem('flag' , JSON.stringify(flag))
        localStorage.setItem('userInfo' , JSON.stringify(userInfo))
        // ==
        
        
        console.log(userData);
        console.log(userInfo);
        
        
    })
}

// let userInfo = [];
// let userData = {}

// signUp.addEventListener('click' , () =>{
//     userData.name = name.value
//     userData.email = email.value
//     userData.password = password.value

//     userInfo.push({ ...userData})
//     name.value = "";
//     email.value = "";
//     password.value = "";
//     console.log(userData);
//     console.log(userInfo);
    
// })