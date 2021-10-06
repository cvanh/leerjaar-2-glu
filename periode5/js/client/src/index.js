import "./style.css";
import io from "socket.io-client"
import http from "http"
// import "./opdracht1/index.html"
console.log("a");

const Buttons = document.getElementsByClassName('button')

const button = document.getElementById('button')
const counter = document.getElementById('counter')
const socket = io("ws://localhost:8070");
console.log(Buttons)
for (const item of Buttons) {
    // console.log(item.innerHTML)
    item.addEventListener('click',()=>{
        console.log(item.innerHTML)
    })
}

ws.addEventListener('open',()=>{
    console.log('open')
})

ws.addEventListener('message',(m)=>{
    console.log('message')
})

ws.addEventListener('close',()=>{
    console.log('close')
})
