
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

// CORRECION MENU TOGGLE AL HACER RESIZE

window.addEventListener('resize',  () => {
    navLink.style.transition = ''
})

// CIERRE AUTOMATICO AL HACER SCROLL MENU TOGGLE

let ubication = window.pageYOffset
window.addEventListener('scroll', ()=>{
    let scroll = window.pageYOffset
    if(ubication = scroll){
        navToggle.classList.remove('nav-links__link--active')
        toggleButton.classList.remove('toggle')
    }
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







