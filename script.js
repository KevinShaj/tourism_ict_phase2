

function validateEmail(email) {
   
         var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email = document.getElementById("email");
        if (regexEmail.test(email.value)) {
            document.getElementById("msg").innerHTML="Valid!"
            document.getElementById("msg").style.color="green"
            count++;
            
        } else {
        
            document.getElementById("msg").innerHTML="InValid!"
            document.getElementById("msg").style.color="red"
        
        }
}


function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = '';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}



function validatePwd() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("CPassword").value;
    var pwd = document.getElementById("pwd");
    if (password != confirmPassword) {
        pwd.innerHTML="No Match!";
        document.getElementById("pwd").style.color="red"
        return false;
       
    }
    else{
        pwd.innerHTML="Match!";
        document.getElementById("pwd").style.color="green"
        count++;
        return true;
    }

}

function phonenumber(number)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var number = document.getElementById("number");
  var phn = document.getElementById("phn");
  if(phoneno.test(number.value))
    {
        phn.innerHTML="Formate Recognized";
        document.getElementById("phn").style.color="green"
    }
    else
        {
        phn.innerHTML="InValid Formate";
        document.getElementById("phn").style.color="red"
        }
}

