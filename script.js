const cPassword = document.getElementById("cPassword"); 

function signupForm()
{
    const fname = document.getElementById("fname").value;   
    const email = document.getElementById("email").value;   
    const password = document.getElementById("password").value;  

    localStorage.setItem('Name', fname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', password);  
}

signupForm();

function validateForm(event) 
{
    event.preventDefault();

    var returnValue = true;
    const fname = document.getElementById("fname").value;   
    const nameError = document.querySelector(".name-errorText");  
    const emailError = document.querySelector(".email-errorText");  
    const email = document.getElementById("email");   
    const password = document.getElementById("password");  
    const passwordError = document.querySelector(".passError");  
    const cPasswordError = document.querySelector(".cPassword-errorText");  
   
    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[@$!%*?&])[A-Za-z\d@$!%!%*?&]{8,}$/;

    console.log(fname);
    if(fname.length < 3)
    {
        nameError.innerHTML = "* Name should contain minimum 3 Letters";
        nameError.style.display = "block";
        returnValue = false;
    }
    else 
    {
        nameError.style.display = "none";
    }

    if(email.value.match(regExp))
    {     
        emailError.style.display = "none";
    }

    else
    {
        emailError.innerHTML = "* Please enter a valid Email";
        emailError.style.display = "block";
        returnValue = false;
    }

    if(email.value == "")
    {
        emailError.innerHTML = "* Please enter a valid Email";
        emailError.style.display = "block";
        returnValue = false;
    }

    if(!password.value.match(passPattern))
    {
        passwordError.innerHTML = "* Please enter atleast 8 character with number,symbol,small and capital letter";
        passwordError.style.display = "block";
    }

    else
    {
        passwordError.style.display = "none";
    }

    if(password.value !== cPassword.value || cPassword.value === "")
    {
        cPasswordError.innerHTML = "* Password didn't match!";
        cPasswordError.style.display = "block";
    }

    else 
    {
        cPasswordError.style.display = "none";
    }
    return returnValue;
};

validateForm();
