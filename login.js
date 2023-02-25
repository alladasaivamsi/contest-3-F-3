function login(e)
{
    e.preventDefault();

    const email = document.getElementById("email").value;   
    const password = document.getElementById("password").value; 
    const errorMessage = document.getElementById("error-message");

    console.log(email);
    let email1 = localStorage.getItem('Email');
    let password1 = localStorage.getItem("Password");

    if(email === email1 && password === password1)
    {
        window.location.href = "dashboard.html";
    }
    else
    {
        errorMessage.innerHTML = "Email and Password doesn't matches.";
        errorMessage.style.display = "block";
    }
}
  
login();

function validateForm2(event) 
{
    event.preventDefault();

    var returnValue = true;
    
    const emailError = document.querySelector(".email-errorText");  
    const email = document.getElementById("email");   
    const password = document.getElementById("password");  
    const passwordError = document.querySelector(".passError");  
   
    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[@$!%*?&])[A-Za-z\d@$!%!%*?&]{8,}$/;

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
    return returnValue;
};

validateForm2();

