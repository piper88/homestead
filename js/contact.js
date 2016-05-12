var saveForm = document.getElementById('saveallthethings');
saveForm.addEventListener('submit', saveOrRedo);
var userInfoArray = [];

function saveOrRedo(event) {
  var checkName = document.forms['saveallthethings']['name'];
  var checkEmail = document.forms['saveallthethings']['email'];
  var checkComments = document.forms['saveallthethings']['comments'];
  if (checkName == null || checkName == '') {
    alert('Please enter your name');
    clearForm();
  } else if ((checkEmail.value).indexOf('@') < 0) {
    alert('Please enter a valid email address');
    clearForm();
  } else {
    event.preventDefault();
    var username = event.target.name.value;
    var useremail = event.target.email.value;
    var comments = event.target.comments.value;
    userInfoArray.push(username, useremail, comments);
    localStorage.setItem('userInfo', JSON.stringify(userInfoArray));
    clearForm();
    console.log(userInfoArray);
  }
}

function clearForm() {
  event.target.name.value = null;
  event.target.email.value = null;
  event.target.comments.value = null;
}

// function saveInfo() {
//   event.preventDefault();
//   var username = event.target.name.value;
//   var useremail = event.target.email.value;
//   var comments = event.target.comments.value;
//   userInfoArray.push(username, useremail, comments);
//   localStorage.setItem('userInfo', JSON.stringify(userInfoArray));
//   // event.target.name.value = null;
//   // event.target.email.value = null;
//   // event.target.comments.value = null;
//   clearForm();
//   console.log(userInfoArray);
// }

//
// function validateForm() {
//   var checkName = document.forms['saveallthethings']['name'];
//   var checkEmail = document.forms['saveallthethings']['email'];
//   console.log(checkEmail.value);
//   var checkComments = document.forms['saveallthethings']['comments'];
//   if (checkName == null || checkName == '') {
//     alert('Please enter your name');
//     clearForm();
//     userInfoArray.splice(0, 3);
//     return false;
//   }
//   if ((checkEmail.value).indexOf('@') < 0) {
//     alert('Please enter a valid email address');
//     clearForm();
//     userInfoArray.splice(0, 3);
//     return false;
//   } else {
//     return true;
//   }
// }
