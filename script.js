  // script.js
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
  
    // Set default mode
    if (!document.body.classList.contains('dark')) {
      document.body.classList.add('light');
    }
  
    // Toggle Dark Mode
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      document.body.classList.toggle('light');
    });

});