// Loading screen
document.getElementById('loading-screen').style.display = 'flex';
setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
}, 1000); 

// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const bookButtons = document.querySelectorAll('.book-now-btn, .book-your-visit-btn');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll("li").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// NAVBAR SHADOW
document.addEventListener('DOMContentLoaded', () => {
    var headers = document.querySelectorAll('header');

    window.addEventListener('scroll', function () {
        headers.forEach(function (header) {
            if (window.scrollY > 0) {
                header.classList.add('shadow');
            } else {
                header.classList.remove('shadow');
            }
        });
    });
});

// BOOK BUTTONS
bookButtons.forEach(button => {
button.addEventListener('click', () => {
    window.location.href = 'reservation.html';
    });
});

// Login
const loginButton = document.querySelector('#login');
loginButton.addEventListener('click', () => {
    window.location.href = 'login.html';
});

// Login message
const loginMessage = localStorage.getItem('loginMessage');
if (loginMessage) {
    alert(loginMessage);
    localStorage.removeItem('loginMessage');
}