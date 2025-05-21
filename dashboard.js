const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    document.getElementById('welcome-message').innerHTML = `Hello, ${loggedInUser.username}!`;