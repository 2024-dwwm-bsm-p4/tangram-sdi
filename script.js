document.querySelector('.darkmode').onclick = 
toggleDarkMode;
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}