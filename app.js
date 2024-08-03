document.addEventListener('DOMContentLoaded', function () {
  // Load user data (mock data for exercise)
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const profileContainer = document.getElementById('profileContainer');
      // Problem 9:
      for (const key in data) {
        let para = document.createElement('para');
        para.innerText = `${key}: ${data[key]}`;
        profileContainer.appendChild(para);
      }
    })
    .catch((error) => console.error('Failed to load user data:', error));

  // Problem 10:
  let sum = 0;
  for (let i = 0; i < 100000; i++) {
    sum += i;
  }

  // Problem 11 (Consider problem 3):
  $('body').append(`<p>The sum is: ${sum}</p>`);
});
