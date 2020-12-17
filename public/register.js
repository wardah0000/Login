
function checkUsername(username) {
  if (!username)
    return 'Username must not be empty';
  else if (username.length < 5)
    return 'Username must be of at least 5 characters.';
  return 'Success';
}

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
  let username_error = document.getElementById('username_error');

  let password_error = document.getElementById('password_error');

  let email_error = document.getElementById('email_error');
  username_error.innerHTML = ''
  password_error.innerHTML = ''
  email_error.innerHTML = ''
}
function validate() {
  clearErrors()
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let email = document.getElementById('email').value;

  let username_error = document.getElementById('username_error');
  let password_error = document.getElementById('password_error');
  let email_error = document.getElementById('email_error');

  let username_msg = checkUsername(username),
      password_msg = checkPassword(password), email_msg = checkEmail(email);


  if (username_msg != 'Success') username_error.innerHTML = username_msg;
  if (email_msg != 'Success') email_error.innerHTML = email_msg;
  if (password_msg != 'Success') password_error.innerHTML = password_msg;

  let is_valid = [username_msg, email_msg, password_msg].every(
      (value) => {return value === 'Success'});

  return is_valid;
}