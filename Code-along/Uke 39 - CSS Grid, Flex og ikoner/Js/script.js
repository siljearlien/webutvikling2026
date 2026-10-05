//Henter HTML-elementet
const ham = document.getElementById("ham")
const closeHam = document.getElementById("close-ham")

const menu = document.getElementById("menu")


ham.addEventListener('click', ()=> {
    menu.style.display = 'flex';
    menu.style.backgroundColor ='green'

    console.log("Knappen er trykket på")

})

closeHam.addEventListener('click', ()=> {
    menu.style.display = 'none';

    console.log("Meny er lukket")

})






