document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 500, // Animation duration
        easing: 'ease-in-out', // Smooth easing
        once: false // Only animate once
    });
});

// Smooth scroll adjustment for anchor links with offset
document.addEventListener('DOMContentLoaded', function () {
    const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the header

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        const targetElement = document.querySelector(this.getAttribute('href')); // Get the target element

        if (targetElement) {
            window.scrollTo({
            top: targetElement.offsetTop - headerHeight, // Scroll to the target element, minus the header height
            behavior: 'smooth' // Smooth scrolling effect
            });
        }
        });
    });
});

let searchBar = document.querySelector('.search-bar');
let searchIcon = document.querySelector('#search-icon');

let header = document.querySelector("header");
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').addEventListener('click',() => {
    navbar.classList.toggle('activeB');
    searchBar.classList.add('active');
});

searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    navbar.classList.remove('activeB');
});

window.onscroll = () => {
    searchBar.classList.add('active');
    navbar.classList.remove('activeB');
}