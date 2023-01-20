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


