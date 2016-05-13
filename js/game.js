//variable declaration
var randomArray = randomNumber();
var filepathArray = ['file:///Users/sarahdebey/projecttwo/images/tree.jpg', 'file:///Users/sarahdebey/projecttwo/images/chicken.jpg', 'file:///Users/sarahdebey/projecttwo/images/cabin.png'];

//getting div elements that hold the imgs
// var firstPicture = document.getElementById('card1-div');
// var secondPicture = document.getElementById('card2-div');
// var thirdPicture = document.getElementById('card3-div');
// var fourthPicture = document.getElementById('card4-div');
// var fifthPicture = document.getElementById('card5-div');
// var sixthPicture = document.getElementById('card6-div');

//getting img elements
var picOne = document.getElementById('card-one');
var picTwo = document.getElementById('card-two');
var picThree = document.getElementById('card-three');
var picFour = document.getElementById('card-four');
var picFive = document.getElementById('card-five');
var picSix = document.getElementById('card-six');

//generic picture constructor with name attribute
function Picture(name, number, filepath) {
  this.name = name;
  this.randomNumber = number;
  this.filepath = filepath;
};

//instantiate 6 cards
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

//function to render 6 images to screen
Picture.prototype.renderPictures = function(){
  if (this.randomNumber == 1) {
    picOne.src = this.filepath;
    // picOne.style.display = 'none';
  }
  if (this.randomNumber == 2) {
    picTwo.src = this.filepath;
    // picTwo.style.visibility = 'hidden';
  }
  if (this.randomNumber == 3) {
    picThree.src = this.filepath;
    // picThree.style.visibility = 'hidden';
  }
  if (this.randomNumber == 4) {
    picFour.src = this.filepath;
    // picFour.style.visibility = 'hidden';
  }
  if (this.randomNumber == 5) {
    picFive.src = this.filepath;
    // picFive.style.visibility = 'hidden';
  }
  if (this.randomNumber == 6) {
    picSix.src = this.filepath;
    // picSix.style.visibility = 'hidden';
  }
};

//call renderPictures function on each card
tree.renderPictures();
tree2.renderPictures();
chicken.renderPictures();
chicken2.renderPictures();
cabin.renderPictures();
cabin2.renderPictures();

picOne.addEventListener('click', handleClicks);
picTwo.addEventListener('click', handleClicks);
picThree.addEventListener('click', handleClicks);
picFour.addEventListener('click', handleClicks);
picFive.addEventListener('click', handleClicks);
picSix.addEventListener('click', handleClicks);

//function to handle clicks
function handleClicks(event) {
  console.log(this.target.id);
  if (this.target.id == 'picOne') {
    picOne.style.visibility = 'visible';
  }
}
