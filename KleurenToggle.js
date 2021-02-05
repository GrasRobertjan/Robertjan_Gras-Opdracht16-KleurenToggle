const btn1 = document.getElementById("btn-hamburgermenu")
const menu = document.querySelector(".menu")
const bodyTag = document.querySelector('.body')

const toggleMenu = function () {
    menu.classList.toggle("toggle-menu")
}
btn1.addEventListener("click", toggleMenu)

const makeHome = document.querySelector(".item-home")
const makeRed = document.querySelector(".item-one")
const makeOrange = document.querySelector(".item-two")
const makePurple = document.querySelector(".item-three")
const makeGreen = document.querySelector(".item-four")


const makeBackgroundHome = function () {
    bodyTag.classList.remove("make-red")
    bodyTag.classList.remove("make-orange")
    bodyTag.classList.remove("make-green")
    bodyTag.classList.remove("make-purple")
    menu.classList.remove("toggle-menu")
    const text = document.querySelector(".text-kleur")
    text.innerHTML = "Dit is de kleur grijs";
}

makeHome.addEventListener("click", makeBackgroundHome);

const makeBackgroundRed = function () {
    bodyTag.classList.add("make-red")
    bodyTag.classList.remove("make-orange")
    bodyTag.classList.remove("make-green")
    bodyTag.classList.remove("make-purple")
    bodyTag.classList.remove('item-home')
    menu.classList.remove("toggle-menu")
    const text = document.querySelector(".text-kleur")
    text.innerHTML = "Dit is de kleur rood";
}

makeRed.addEventListener("click", makeBackgroundRed);

const makeBackgroundOrange = () => {
    bodyTag.classList.remove("make-red")
    bodyTag.classList.add("make-orange")
    bodyTag.classList.remove("make-green")
    bodyTag.classList.remove("make-purple")
    menu.classList.remove("toggle-menu")
    const text = document.querySelector(".text-kleur")
    text.innerHTML = "Dit is de kleur oranje";
}
makeOrange.addEventListener("click", makeBackgroundOrange)

const makeBackgroundGreen = () => {
    bodyTag.classList.remove("make-red")
    bodyTag.classList.remove("make-orange")
    bodyTag.classList.add("make-green")
    bodyTag.classList.remove("make-purple")
    menu.classList.remove("toggle-menu")
    const text = document.querySelector(".text-kleur")
    text.innerHTML = "Dit is de kleur groen";
}
makePurple.addEventListener("click", makeBackgroundGreen);

const makeBackgroundPurple = () => {
    bodyTag.classList.remove("make-red")
    bodyTag.classList.remove("make-orange")
    bodyTag.classList.remove("make-green")
    bodyTag.classList.add("make-purple")
    menu.classList.remove("toggle-menu")
    const text = document.querySelector(".text-kleur")
   text.innerHTML = "Dit is de kleur paars"
}
makeGreen.addEventListener("click", makeBackgroundPurple);