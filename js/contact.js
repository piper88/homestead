var saveForm = document.getElementById('saveallthethings');
saveForm.addEventListener('submit', saveInfo);
var userInfoArray = [];

function saveInfo(event) {
  event.preventDefault();
  var username = event.target.name.value;
  var useremail = event.target.email.value;
  var comments = event.target.comments.value;
  userInfoArray.push(username, useremail, comments);
  localStorage.setItem('userInfo', JSON.stringify(userInfoArray));
  console.log(userInfoArray);
  event.target.name.value = null;
  event.target.email.value = null;
  event.target.comments.value = null;
}
