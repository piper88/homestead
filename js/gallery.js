// var currentPic = document.getElementById('clickableimage');
// currentPic.addEventListener('click', changeImage);
//
// // var imageArray = ['../images/gardenapril30.jpg', '../images/gardenmay10.jpg', '../images/gardenmay10partdeux.jpg', '../images/nickwithfish.jpg'];
//
var imageArray = ['file:///Users/sarahdebey/myfunprojects/projecttwo/images/gardenapril30.jpg', 'file:///Users/sarahdebey/myfunprojects/projecttwo/images/gardenmay10.jpg', 'file:///Users/sarahdebey/myfunprojects/projecttwo/images/gardenmay10partdeux.jpg', 'file:///Users/sarahdebey/myfunprojects/projecttwo/images/nickwithfish.jpg'];
//
// function changeImage(event) {
//   // console.log(currentPic.src);
//   if (currentPic.src == imageArray[0]) {
//     console.log('first if ran');
//     currentPic.src = imageArray[1];
//   } else if (currentPic.src == imageArray[1]) {
//     console.log('first else/if ran');
//     currentPic.src = imageArray[2];
//   } else if (currentPic.src == imageArray[2]) {
//     console.log('second else/if ran');
//     currentPic.src = imageArray[3];
//   } else {
//     console.log('third else/if ran');
//     currentPic.src = imageArray[0];
//   }
// }
var currentPic = document.getElementById('clickableimage');
var nextPic = document.getElementById('next');
nextPic.addEventListener('click', nextImage);
var previousPic = document.getElementById('previous');
previousPic.addEventListener('click', previousImage);

function nextImage(event) {
  if (currentPic.src == imageArray[0]) {
    currentPic.src = imageArray[1];
  } else if (currentPic.src == imageArray[1]) {
    currentPic.src = imageArray[2];
  } else if (currentPic.src == imageArray[2]) {
    currentPic.src = imageArray[3];
  } else {
    currentPic.src = imageArray[0];
  }
}

function previousImage(event) {
  if (currentPic.src == imageArray[1]) {
    currentPic.src = imageArray[0];
  } else if (currentPic.src == imageArray[2]) {
    currentPic.src = imageArray[1];
  } else if (currentPic.src == imageArray[3]) {
    currentPic.src = imageArray[2];
  } else {
    currentPic.src = imageArray[3];
  }
}
