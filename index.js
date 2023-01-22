document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        })
    })
})



const button = document.querySelector('button');
const dropdown = document.querySelector('ul');

button.addEventListener('click', () => {
  dropdown.classList.toggle('hidden');
});


const dropdownbutton = document.getElementById('drop-down')
const level1 = document.getElementById('level1')

const dropdownclicked = () => {
    console.log('hi')
}

dropdownbutton.addEventListener('click', dropdownclicked)

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

