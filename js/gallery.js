
var imageArray = ['file:///Users/sarahdebey/myfunprojects/projecttwo/images/gardenapril30.jpg', 'file:///Users/sarahdebey/myfunprojects/projecttwo/images/gardenmay10.jpg', 'file:///Users/sarahdebey/myfunprojects/projecttwo/images/gardenmay10partdeux.jpg', 'file:///Users/sarahdebey/myfunprojects/projecttwo/images/nickwithfish.jpg'];

var captionArray = ['Our garden, April 30th, 2016', 'Our garden, May 10th, 2016', 'Our garden again, May 10th, 2016', 'Nick catching a salmon'];

var fillCircleOne = document.getElementById('circleone');
var fillCircleTwo = document.getElementById('circletwo');
var fillCircleThree = document.getElementById('circlethree');
var fillCircleFour = document.getElementById('circlefour');

var currentPic = document.getElementById('clickableimage');
var nextPic = document.getElementById('next');
nextPic.addEventListener('click', nextImage);
var previousPic = document.getElementById('previous');
previousPic.addEventListener('click', previousImage);

fillCircles();

function fillCircles() {
  if (currentPic.src = imageArray[0]) {
    fillCircleOne.style.background = 'green';
  }
}

function nextImage(event) {
  if (currentPic.src == imageArray[0]) {
    currentPic.src = imageArray[1];
    fillCircleTwo.style.background = 'green';
    fillCircleOne.style.background = 'none';
  } else if (currentPic.src == imageArray[1]) {
    currentPic.src = imageArray[2];
    fillCircleThree.style.background = 'green';
    fillCircleTwo.style.background = 'none';
  } else if (currentPic.src == imageArray[2]) {
    currentPic.src = imageArray[3];
    fillCircleFour.style.background = 'green';
    fillCircleThree.style.background = 'none';
  } else {
    currentPic.src = imageArray[0];
    fillCircleOne.style.background = 'green';
    fillCircleFour.style.background = 'none';
  }
}

function previousImage(event) {
  if (currentPic.src == imageArray[1]) {
    currentPic.src = imageArray[0];
    fillCircleOne.style.background = 'green';
    fillCircleTwo.style.background = 'none';
  } else if (currentPic.src == imageArray[2]) {
    currentPic.src = imageArray[1];
    fillCircleTwo.style.background = 'green';
    fillCircleThree.style.background = 'none';
  } else if (currentPic.src == imageArray[3]) {
    currentPic.src = imageArray[2];
    fillCircleThree.style.background = 'green';
    fillCircleFour.style.background = 'none';
  } else {
    currentPic.src = imageArray[3];
    fillCircleFour.style.background = 'green';
    fillCircleOne.style.background = 'none';
  }
}
