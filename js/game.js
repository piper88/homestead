//variable declarations
var randomArray = randomNumber();
var arrayOfCards = [];
var guessArray = [];
var filepathArray = ['file:///Users/sarahdebey/projecttwo/images/tree.jpg', 'file:///Users/sarahdebey/projecttwo/images/chicken.jpg', 'file:///Users/sarahdebey/projecttwo/images/cabin.png'];

//getting img elements
var picOne = document.getElementById('card1');
var picTwo = document.getElementById('card2');
var picThree = document.getElementById('card3');
var picFour = document.getElementById('card4');
var picFive = document.getElementById('card5');
var picSix = document.getElementById('card6');

//generic picture constructor with name, randomNumber, and filepath attributes
function Picture(name, number, filepath) {
  this.name = name;
  this.randomNumber = number;
  this.filepath = filepath;
  this.imageid = 'card' + number;
};

//instantiate 6 cards, with a name, random number and filepath, but doesn't know where it's going to sit yet....
var tree = new Picture('tree', randomArray[0], filepathArray[0]);
var tree2 = new Picture('tree', randomArray[1], filepathArray[0]);

var chicken = new Picture('chicken', randomArray[2], filepathArray[1]);
var chicken2 = new Picture('chicken', randomArray[3], filepathArray[1]);

var cabin = new Picture('cabin', randomArray[4], filepathArray[2]);
var cabin2 = new Picture('cabin', randomArray[5], filepathArray[2]);

// Picture.prototype.addEventListener = function() {
//
// }

//function to return 6 unique random numbers between 1 and 6 in an array called randomARray
function randomNumber() {
  var randoms = [];
  for (var i = 0; i < 6; i++) {
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    while (randoms.indexOf(randomNumber) > -1) {
      randomNumber = Math.floor(Math.random() * 6 + 1);
    }
    randoms.push(randomNumber);
  }
  return randoms;
}

var numShown = 0;

//function to create array of objects
function createArrayOfCards() {
  arrayOfCards.push(tree, tree2, chicken, chicken2, cabin, cabin2);
  return arrayOfCards;
}

function toggleEventListeners(event) {
  if (event.target.src == 'file:///Users/sarahdebey/projecttwo/images/green.jpg') {
    numShown++;
    showPictures(event);
  } else if (event.target.src !== 'file:///Users/sarahdebey/projecttwo/images/green.jpg') {
    showGreen(event);
    // numShown--;
  }
}

function whoGivesAFuck(event) {
  console.log(guessArray);
  if (numShown < 2) {
    toggleEventListeners(event);
  }
  if (guessArray[0].src == guessArray[1].src) {
    document.getElementById(guessArray[0].id).removeEventListener('click', whoGivesAFuck);
    document.getElementById(guessArray[1].id).removeEventListener('click', whoGivesAFuck);
  } else {
    guessArray[0].src = 'file:///Users/sarahdebey/projecttwo/images/green.jpg';
    guessArray[1].src = 'file:///Users/sarahdebey/projecttwo/images/green.jpg';
  }
}

picOne.addEventListener('click', whoGivesAFuck);
picTwo.addEventListener('click', whoGivesAFuck);
picThree.addEventListener('click', whoGivesAFuck);
picFour.addEventListener('click', whoGivesAFuck);
picFive.addEventListener('click', whoGivesAFuck);
picSix.addEventListener('click', whoGivesAFuck);

function showGreen (event) {
  event.target.src = 'file:///Users/sarahdebey/projecttwo/images/green.jpg';
  // numShown--;
}

function showPictures (event) {
  for (var i = 0; i < arrayOfCards.length; i++) {
    if (event.target.id == 'card-one') {
      if (arrayOfCards[i].randomNumber == 1) {
        picOne.src = arrayOfCards[i].filepath;
        guessArray.push(picOne);
      }
    }
    if (event.target.id == 'card-two') {
      if (arrayOfCards[i].randomNumber == 2) {
        picTwo.src = arrayOfCards[i].filepath;
        guessArray.push(picTwo);
      }
    }
    if (event.target.id == 'card-three') {
      if (arrayOfCards[i].randomNumber == 3) {
        picThree.src = arrayOfCards[i].filepath;
        guessArray.push(picThree);
      }
    }
    if (event.target.id == 'card-four') {
      if (arrayOfCards[i].randomNumber == 4) {
        picFour.src = arrayOfCards[i].filepath;
        guessArray.push(picFour);
      }
    }
    if (event.target.id == 'card-five') {
      if (arrayOfCards[i].randomNumber == 5) {
        picFive.src = arrayOfCards[i].filepath;
        guessArray.push(picFive);
      }
    }
    if (event.target.id == 'card-six') {
      if (arrayOfCards[i].randomNumber == 6) {
        picSix.src = arrayOfCards[i].filepath;
        guessArray.push(picSix);
      }
    }
  }
}

createArrayOfCards();
