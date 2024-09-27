document.querySelector('.darkmode').onclick = 
toggleDarkMode;
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}

document.querySelector('.figure1').addEventListener('click',function() {
    if (!document.querySelector('link[href="square.css"]')) {
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = "square.css";
        document.head.appendChild(link);
    }
});

document.querySelector('.figure2').addEventListener('click',function() {
    if (!document.querySelector('link[href="boat.css"]')) {
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = "boat.css";
        document.head.appendChild(link);
    }
});

document.querySelector('.figure3').addEventListener('click',function() {
    if (!document.querySelector('link[href="duck.css"]')) {
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = "duck.css";
        document.head.appendChild(link);
    }
});