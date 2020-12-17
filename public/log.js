function validate() {
  var name = document.getElementById('username').value;
  var pass = document.getElementById('password').value;

  if (name == null || name == '' || name.length < 5) {
    alert('username must be atleast 5 characters long');
    // name.setCustomValidity("Please fill out this field");
    return false;
  }
  else 
    name.setCustomValidity(""); 

  if (pass == null || pass.length < 8) {
    password.setCustomValidity("password must be atleast 8 characters long");
    return false;
  }

  else
    password.setCustomValidity(""); 
}