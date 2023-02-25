const dashboardName = document.getElementById("dashboard-name"); 
const dashboardEmail = document.getElementById("dashboard-email"); 
const couponCode = document.getElementById("coupon-code"); 

dashboardName.innerHTML = localStorage.getItem("Name");
dashboardEmail.innerHTML = localStorage.getItem("Email");

const container4 = document.querySelector('#container4');
const cpnCode = document.getElementById('cpnCode');
const cpnBtn = document.querySelector('#cpnBtn');
cpnCode.textContent = createRandomCoupon(16);    

function createRandomCoupon(stringLength) {
    var randomCoupon = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    for(var i, i = 0; i < stringLength; i++)
    {
        randomCoupon += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    console.log(randomCoupon);
    localStorage.setItem('couponName', randomCoupon);
    
    navigator.clipboard.writeText(cpnCode.innerHTML);
}

couponCode.innerHTML = localStorage.getItem("couponName");

const oldPassword = document.getElementById("old-password-field");
const newPassword = document.getElementById("new-password-field");
const confirmPassword = document.getElementById("confirm-password-field");
const passwordError = document.querySelector(".passError");  
const cPasswordError = document.querySelector(".cPassword-errorText"); 
const password = document.getElementById("password");   
const cPassword = document.getElementById("cPassword"); 

localStorage.setItem('Password', newPassword); 

function validPassword(event)
{
    event.preventDefault();

    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[@$!%*?&])[A-Za-z\d@$!%!%*?&]{8,}$/;

    if(!password.value.match(passPattern))
    {
        passwordError.innerHTML = "* Please enter atleast 8 character with number,symbol,small and capital letter";
        passwordError.style.display = "block";
    }

    else
    {
        passwordError.style.display = "none";
    }

    if(newPassword.value !== oldPassword.value || confirmPassword.value !== newPassword.value)
    {
        cPasswordError.innerHTML = "* Password didn't match!";
        cPasswordError.style.display = "block";
    }

    else 
    {
        cPasswordError.style.display = "none";
    }
    return returnValue;
}