
// MENU RESPONSIVE

const toggleButton = document.getElementById('toggle')
const navToggle = document.getElementById('navToggle')

toggleButton.addEventListener('click', ()=>{
    navToggle.classList.toggle('nav-links__link--active')

    // BURGUER ANIMACION

    toggleButton.classList.toggle('toggle')
})

// EFECTO TITULO

const logo = document.getElementById('logo')
const letrasLogo = logo.innerHTML

logo.innerHTML = ""

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







