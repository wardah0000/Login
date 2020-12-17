
function checkEmail(email) {
  if (!email)
    return 'Email must not be empty';
  else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
           .test(email))
    return 'Please enter valid email id.'
    return 'Success';
}

function checkPassword(password) {
  if (!password)
    return 'Password must not be empty';
  else if (
      (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/.test(password)) ||
      !(password.length >= 6))
    return 'Your password must of at least 6 characters.'
    return 'Success';
}

function clearErrors() {
  let password_error = document.getElementById('password_error');

  let email_error = document.getElementById('email_error');
  password_error.innerHTML = ''
  email_error.innerHTML = ''
}

function validate() {
  clearErrors()
  let password = document.getElementById('password').value;
  let email = document.getElementById('email').value;

  let password_error = document.getElementById('password_error');
  let email_error = document.getElementById('email_error');

  let password_msg = checkPassword(password), email_msg = checkEmail(email);


  if (email_msg != 'Success') email_error.innerHTML = email_msg;
  if (password_msg != 'Success') password_error.innerHTML = password_msg;

  let is_valid =
      [email_msg, password_msg].every((value) => {return value === 'Success'});

  return is_valid;
}