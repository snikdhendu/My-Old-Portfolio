// Preloader js
document.addEventListener("DOMContentLoaded", function() {
    // Simulate preloader animation for 2 seconds
    setTimeout(function(){
        // Hide loader and show main content with animation
        document.querySelector('.loader-wrapper').classList.add('loaded');
        document.querySelector('.main-content').style.display = 'block'; // Display main content
        document.querySelector('.main-content').classList.add('show'); // Add class for animation
    }, 4000);
});

// open close menu in small device
let menuicon=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');
menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections =document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

// sticky navbar
// Add an event listener for the 'scroll' event
document.addEventListener("DOMContentLoaded", function () {
    // Select sections and navigation links
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
        // Active sections
        sections.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });
                document
                    .querySelector(`header nav a[href="#${id}"]`)
                    .classList.add("active");
            }
        });

        // Sticky nav bar
        let header = document.querySelector(".header");
        header.classList.toggle("sticky", window.scrollY > 100);

        menuicon.classList.remove('bx-x');
        navbar.classList.remove('active');


    };

});

// Dark-light mode JavaScript
let darkmode = document.querySelector('#darkmode');
darkmode.onclick = () => {
    darkmode.classList.toggle('bx-sun'); // Add this line to toggle the sun icon
    darkmode.classList.toggle('bx-moon'); // Add this line to toggle the moon icon
    document.body.classList.toggle('darkmode');
};
// Auto matic text in about section------------>ABOUT
var typed = new Typed(".autoinput", {
    strings: ['Cse Undergraduate', 'Coder', 'Tech Explorer', 'Cloud Entusiast', 'ML learner'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true

})




//  skill sectiion js-------------->SKILL
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute('data-dots')
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots * marked / 100);
    var rotate = 360 / dots;
    var points = "";
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})
// my click in skill section
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
// This is for Education section------------------->EDUCATION
var animateFromLeft = true;

$(window).scroll(function () {
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    $('.experience .content .hidden').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();

        /* Determine animation direction based on the 'animateFromLeft' flag */
        var direction = animateFromLeft ? 'left' : 'right';

        /* If the object is completely visible in the window, fadeIn it */
        if (bottom_of_window > bottom_of_object) {
            if (direction === 'left') {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '0'
                }, 600);
            } else {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '0'
                }, 600);
            }

            /* Toggle the 'animateFromLeft' flag for the next element */
            animateFromLeft = !animateFromLeft;
        }
    });
});

  

