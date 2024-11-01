const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const icon = document.getElementById('icon');

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Toggle icon between sun and moon
  if (body.classList.contains('dark-mode')) {
    icon.src = 'moon.png';  // Update with the path of your moon icon
  } else {
    icon.src = 'sun.png';  // Update with the path of your sun icon
  }
});
