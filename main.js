const menu = document.querySelector(".menu")
const toggle = document.querySelectorAll(".toggle")

for (const element of toggle) {
    element.addEventListener('click', () => {
        menu.classList.toggle('show')
    })
}