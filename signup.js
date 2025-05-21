
const createAccountForm = document.getElementById('create-account-form');

createAccountForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === '') {
    alert('Please enter a username');
    return;
  }

  if (email === '') {
    alert('Please enter an email');
    return;
  }

  if (!validateEmail(email)) {
    alert('Invalid email format');
    return;
  }

  if (password === '') {
    alert('Please enter a password');
    return;
  }

  if (password.length < 4) {
    alert('Password must be at least 4 characters long');
    return;
  }

  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  

  const newUser = {
    username,
    email,
    password,
  };

  storedUsers.push(newUser);
  localStorage.setItem('users', JSON.stringify(storedUsers));
  window.location.href = '/storage/emulated/0/images/School website/login.html';
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
