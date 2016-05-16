//variable declarations
var randomArray = randomNumber();
var arrayOfCards = [];
var filepathArray = ['file:///Users/sarahdebey/projecttwo/images/tree.jpg', 'file:///Users/sarahdebey/projecttwo/images/chicken.jpg', 'file:///Users/sarahdebey/projecttwo/images/cabin.png'];

//getting img elements
var picOne = document.getElementById('card-one');
var picTwo = document.getElementById('card-two');
var picThree = document.getElementById('card-three');
var picFour = document.getElementById('card-four');
var picFive = document.getElementById('card-five');
var picSix = document.getElementById('card-six');

//generic picture constructor with name, randomNumber, and filepath attributes
function Picture(name, number, filepath) {
  this.name = name;
  this.randomNumber = number;
  this.filepath = filepath;
};

//instantiate 6 cards, with a name, random number and filepath, but doesn't know where it's going to sit yet....
var tree = new Picture('tree', randomArray[0], filepathArray[0]);
var tree2 = new Picture('tree', randomArray[1], filepathArray[0]);

var chicken = new Picture('chicken', randomArray[2], filepathArray[1]);
var chicken2 = new Picture('chicken', randomArray[3], filepathArray[1]);

var cabin = new Picture('cabin', randomArray[4], filepathArray[2]);
var cabin2 = new Picture('cabin', randomArray[5], filepathArray[2]);

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

//function to create array of objects
function createArrayOfCards() {
  arrayOfCards.push(tree, tree2, chicken, chicken2, cabin, cabin2);
  return arrayOfCards;
}

function toggleEventListeners(event) {
  if (event.target.src == 'file:///Users/sarahdebey/projecttwo/images/green.jpg') {
    showPictures(event);
  } else if (event.target.src !== 'file:///Users/sarahdebey/projecttwo/images/green.jpg') {
    showGreen(event);
  }
}

picOne.addEventListener('click', toggleEventListeners);
picTwo.addEventListener('click', toggleEventListeners);
picThree.addEventListener('click', toggleEventListeners);
picFour.addEventListener('click', toggleEventListeners);
picFive.addEventListener('click', toggleEventListeners);
picSix.addEventListener('click', toggleEventListeners);

function showGreen (event) {
  event.target.src = 'file:///Users/sarahdebey/projecttwo/images/green.jpg';
}

function showPictures (event) {
  for (var i = 0; i < arrayOfCards.length; i++) {
    if (event.target.id == 'card-one') {
      if (arrayOfCards[i].randomNumber == 1) {
        picOne.src = arrayOfCards[i].filepath;
      }
    }
    if (event.target.id == 'card-two') {
      if (arrayOfCards[i].randomNumber == 2) {
        picTwo.src = arrayOfCards[i].filepath;
      }
    }
    if (event.target.id == 'card-three') {
      if (arrayOfCards[i].randomNumber == 3) {
        picThree.src = arrayOfCards[i].filepath;
      }
    }
    if (event.target.id == 'card-four') {
      if (arrayOfCards[i].randomNumber == 4) {
        picFour.src = arrayOfCards[i].filepath;
      }
    }
    if (event.target.id == 'card-five') {
      if (arrayOfCards[i].randomNumber == 5) {
        picFive.src = arrayOfCards[i].filepath;
      }
    }
    if (event.target.id == 'card-six') {
      if (arrayOfCards[i].randomNumber == 6) {
        picSix.src = arrayOfCards[i].filepath;
      }
    }
  }
}

createArrayOfCards();


//Now have to create game logic. User clicks one picture and then another picture. If pictures are a match, remove all event listeners. If pictures are not a match, user should click to turn back over.
