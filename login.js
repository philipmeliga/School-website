
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === '') {
    alert('Please enter a username');
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

  const storedUsers = JSON.parse(localStorage.getItem('users'));
  const user = storedUsers.find((user) => user.username === username && user.password === password);

  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    window.location.href = '/storage/emulated/0/images/School website/dashboard.html';
  } else {
    alert('Invalid username or password');
  }
});

