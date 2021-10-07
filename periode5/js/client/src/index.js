// note: do i really need this? keep in case i do
const player1press = document.getElementById('player1press');
const player2press = document.getElementById('player2press');

let player1counter = document.getElementById('player1counter');
let player2counter = document.getElementById('player2counter');

const form = document.getElementById('form')

// the result box
const resut = document.getElementById('result')

let gameActive = false

// gets a the duration of the game in seconds
form.addEventListener('submit',(data)=>{
    event.preventDefault()
    console.log(data.number)
    gameStart() //TODO make the input value here
})
startGame()
function startGame(duration){
    console.log(`starting a game with a duration of: ${duration} seconds`)
    
    // resets the counter
    player1counter.innerHTML = 0
    player2counter.innerHTML = 0

    setTimeout(() => {
        if(player1counter.innerHTML > player2counter.innerHTML){
            console.log('player 1 has seem to win')
            resut.innerHTML = '<h1>player 1 has won</h1>'
        } else {
            console.log('player 2 has seem to win')
            resut.innerHTML = '<h1>player 2 has won</h1>'
        } // TODO add tie
    }, 2000); // TODO place duraction here

}


// handles the key events
document.addEventListener('keypress',(k)=>{
    // variable k is the key being pressed
    console.log(k.key)
    switch(k.key){
        case 'a':
            // player 1
            player1counter.innerHTML++
            break;
        case 'e':
            // player 2 
            player2counter.innerHTML++
            break;
        default:
            console.log('no valid key input')
            break;

    }
})


