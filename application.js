// Get elements
const applyBtn = document.getElementById('apply-btn');
const applicationForm = document.getElementById('application-form');
const submitBtn = document.getElementById('submit-btn');
const confirmationMsg = document.getElementById('confirmation-msg');

// Show application form when Apply button is clicked
applyBtn.addEventListener('click', () => {
  applicationForm.style.display = 'block';
});

// Handle form submission
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const zip = document.getElementById('zip').value;
  const program = document.getElementById('program').value;
  const gpa = document.getElementById('gpa').value;
  const testScores = document.getElementById('test-scores').value;
  const extracurriculars = document.getElementById('extracurriculars').value;
  const essay = document.getElementById('essay').value;

  // Display confirmation message
  applicationForm.style.display = 'none';
  confirmationMsg.style.display = 'block';

  // Store application data in local storage
  const applicationData = {
    name,
    email,
    phone,
    address,
    city,
    state,
    zip,
    program,
    gpa,
    testScores,
    extracurriculars,
    essay,
  };
  localStorage.setItem('applicationData', JSON.stringify(applicationData));
});