
function validate() {
    var name = document.getElementById('username').value;
    var validityState_object = name.validity;
    var pass = document.getElementById('password').value;
    var mail = document.getElementById('email').value;

    if(name == "")
    {
        alert("Please Enter Your Username");
        // document.form.name.focus();
        return false;
    }

    else if(!isNaN(name))
    {
        alert("Please Enter Only Characters");
        // document.form.name.select();
        return false;
    }

    else if(name.length < 5)
    {
        alert('Username must be atleast 5 characters long');
    }
    else 
    {    
        return true;
    }

}

 