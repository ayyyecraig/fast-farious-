
let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)
 
  // Part 1
 document.getElementById('main-title').innerText="I'm Dom Toretto"
  // Part 2

  let color = "red"
  document.body.style.backgroundColor =  color;
  // Part 3
document.querySelectorAll('li')[5].remove()
  // Part 4

let specialTitle = document.querySelectorAll('.special-title').forEach(element => {
  element.style.fontSize ='2rem'
})
      
  // Part 5
 document.querySelectorAll('li')[8].remove()
  // Part 6
let newLocation = document.createElement('li')
newLocation.innerText ='Dallas'

document.querySelector('#past-races').appendChild(newLocation)
  // Part 7
let newBlogPost = document.createElement('div')
newBlogPost.className= 'blog-post purple'; 
let currentMain = document.querySelector('.main');
currentMain.insertBefore(newBlogPost, currentMain.children[4]);

let newHead =document.createElement('h1')
newHead.innerText='Dallas';
newBlogPost.appendChild(newHead)

let newP =document.createElement('p')
newP.innerText='Man everyone here sucks at driving';
newBlogPost.appendChild(newP)
}



