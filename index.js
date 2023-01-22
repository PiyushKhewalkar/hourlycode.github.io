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

// Grab HTML Elements
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// Add Event Listeners
btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});
