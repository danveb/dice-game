let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
let randomNumber2 = Math.floor(Math.random() * 6) + 1; 

// Player 1
document.querySelector('.img1').setAttribute('src', 'images/dice' + randomNumber1 + '.png'); 

// Player 2
document.querySelector('.img2').setAttribute('src', 'images/dice' + randomNumber2 + '.png'); 

// Start with a condition to check 
// If randomNumber1 === randomNumber2; then draw
if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').textContent = 'Draw!'; 
// If randomNumber1 > randomNumber2; then player1 wins 
} else if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').textContent = 'Player 1 Wins!'
// If randomNumber1 < randomNumber2; then player2 wins 
} else {
    document.querySelector('h1').textContent = 'Player 2 Wins!'
}; 
