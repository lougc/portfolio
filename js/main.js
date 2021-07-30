
// MENU RESPONSIVE

const toggleButton = document.getElementById('toggle')
const navToggle = document.getElementById('navToggle')
const navLink = document.querySelector('.nav-links')

toggleButton.addEventListener('click', ()=>{
    // MENU TOGGLE
    navLink.style.transition = 'transform 0.5s ease-in'

    navToggle.classList.toggle('nav-links__link--active')
   
    // BURGUER ANIMACION

    toggleButton.classList.toggle('toggle')

})

window.addEventListener('resize',  () => {
    navLink.style.transition = ''
})

// EFECTO TITULO

const logo = document.getElementById('logo')
const letrasLogo = logo.innerHTML

logo.innerHTML = "L"

const speed = 150
let i = 0

typeWriter = () =>{
    if(i < letrasLogo.length) {
        logo.innerHTML += letrasLogo.charAt(i)
        i++;
        setTimeout(typeWriter, speed)
    }
}

setTimeout(typeWriter, speed)







