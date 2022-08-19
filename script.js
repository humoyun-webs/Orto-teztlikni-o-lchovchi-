"use strict";
let input = document.querySelector("#result")
let button = document.querySelector("#button")
let result1 = document.querySelector(".result1")
let result2= document.querySelector(".result2")
let result3 = document.querySelector(".result3")
let result4 = document.querySelector(".result4")



let foot = 3.6
let bike  = 20.1
let car = 70
let pilot = 800



function man(){
    result1.textContent = input.value * 1 /foot 
    result2.textContent = input.value * 1 /bike
    result3.textContent = input.value * 1 /car
    result4.textContent = input.value * 1 /pilot
}


