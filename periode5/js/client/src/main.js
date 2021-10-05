const button = document.getElementById('button')
const counter = document.getElementById('counter')
const ws = new WebSocket("ws://localhost:7072/bar")

button.addEventListener('click',()=>{
    counter.innerHTML++
    console.log('a')
})

ws.addEventListener('open',()=>{
    console.log('open')
})

ws.addEventListener('message',(m)=>{
    console.log('message')
})

ws.addEventListener('close',()=>{
    console.log('close')
})
