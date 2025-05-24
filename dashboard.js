function displayGreeting() {
  const greetingElement = document.getElementById("greeting");
  const now = new Date();
  const hour = now.getHours();

  if (hour < 12) {
    greetingElement.textContent = "Good morning!";
  } else if (hour < 17) {
    greetingElement.textContent = "Good afternoon!";
  } else {
    greetingElement.textContent = "Good evening!";
  }
}

// Call the function when the page loads
window.onload = displayGreeting;


const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    document.getElementById('welcome-message').innerHTML = `Hello, ${loggedInUser.username}!`;
