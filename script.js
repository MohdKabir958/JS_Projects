const login = document.getElementById("log_btn")

login.addEventListener('click', () => {
    console.log("clicked!!!")
    console.log(user_name.ariaValueText)
    console.log(login)
    console.log(pass)
})


function onLogin() {
    const user_name = document.getElementById("user").value;
    const password_log = document.getElementById("pass").value;

    console.log(user_name, password_log);
}


/*function onSignIn(){
    const first_name = document.getElementById("f_name").value;
        const last_name= document.getElementById("l_name").value;
            const email= document.getElementById("e_mail").value;
                const password_sign= document.getElementById("pass_sign").value;
  const confirm_password= document.getElementById("con_pass").value;

       console.log(first_name,last_name,email,password_sign,confirm_password);
       }*/
