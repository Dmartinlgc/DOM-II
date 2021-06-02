// Your code // Your code goes here
const mainNav = document.querySelector(".main-navigation")
const buttons = document.querySelectorAll(".btn")
const bus =document.querySelector('.logo-heading')
const info = document.querySelectorAll('h2')
const navig =document.querySelectorAll('.nav-link')
const bod = document.querySelector(".home")
const text = document.querySelectorAll('p')


mainNav.addEventListener('mouseover', function(){
     mainNav.style.backgroundColor = "#17a2b8";
})
mainNav.addEventListener('mouseout', function(){
    mainNav.style.backgroundColor = "#FFF"
})

buttons.forEach(item =>{
item.addEventListener('click',(event) => {
alert("Thanks for signing up!!")
    })
})

document.addEventListener('keydown',(event) => {
if(event.keyCode === 13){
  bus.style.fontWeight = "bold"    
} 
})

document.addEventListener('keyup',(event) => {
if(event.keyCode === 13){
  bus.style.fontWeight = ""    
    } 
})

info.forEach(item =>{
document.addEventListener('wheel',(event) =>{
    item.style.color = "#17a2b8"
    })
})

navig.forEach(item=>{
    item.addEventListener('dblclick',(event)=>{
        item.style.color ='#FFF'
    })
})

document.addEventListener('mousedown',(event)=>{
    bod.style.backgroundColor =  "#17a2b8"
})
document.addEventListener('mouseup',(event)=>{
    bod.style.backgroundColor =  "#FFF"
})

text.forEach(item =>{
document.addEventListener('mousemove',(event)=>{
item.style.fontFamily = 'Indie Flower', cursive

    })
})

