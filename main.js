const menu = document.querySelector(".menu")
const toggle = document.querySelectorAll(".toggle")
const links = document.querySelectorAll("nav ul li a")

for (const element of toggle) {
    element.addEventListener('click', () => {
        menu.classList.toggle('show')
    })
}

for (const link of links) {
    link.addEventListener('click', () => {
        menu.classList.remove('show')
    })
}