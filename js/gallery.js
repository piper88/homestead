//
// var imagePaths = ['../images/gardenapril30.jpg', '../images/gardenmay10.jpg', '../images/gardenmay10partdeux.jpg', '../images/nickwithfish.jpg'];
// var clickableImage = document.getElementById('clickableimage');

// function displayFirstPic() {
//   clickableImage.src = imagePaths[0];
// }
//
// displayFirstPic();
var currentPic = document.getElementById('clickableimage');
currentPic.addEventListener('click', changeImage);

var imageArray = ['../images/gardenapril30.jpg', '../images/gardenmay10.jpg', '../images/gardenmay10partdeux.jpg', '../images/nickwithfish.jpg'];

function changeImage(event) {
  // var currentPic = document.getElementById('clickableimage');
  console.log(currentPic.src);
  // var image1 = 'file:///Users/sarahdebey/myfunprojects/projecttwo/images/gardenapril30.jpg';
  // var image2 = 'file:///Users/sarahdebey/myfunprojects/projecttwo/images/gardenmay10.jpg';
  // var image3 = 'file:///Users/sarahdebey/myfunprojects/projecttwo/images/gardenmay10partdeux.jpg';
  // var image4 = 'file:///Users/sarahdebey/myfunprojects/projecttwo/images/nickwithfish.jpg';
  if (currentPic.src == imageArray[0]) {
    console.log('first if ran');
    currentPic.src = imageArray[1];
  } else if (currentPic.src == imageArray[1]) {
    console.log('first else/if ran');
    currentPic.src = imageArray[2];
  } else if (currentPic.src == imageArray[2]) {
    console.log('second else/if ran');
    currentPic.src = imageArray[3];
  } else {
    console.log('third else/if ran');
    currentPic.src = imageArray[0];
  }
}
//
