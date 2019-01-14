// Initialize Firebase (ADD YOUR OWN DATA)
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDtWspy1xzGuZKMxLeVspxRxP7seCHUymE",
    authDomain: "loginpage-b5ef9.firebaseapp.com",
    databaseURL: "https://loginpage-b5ef9.firebaseio.com",
    projectId: "loginpage-b5ef9",
    storageBucket: "loginpage-b5ef9.appspot.com",
    messagingSenderId: "523646427899"
  };
  firebase.initializeApp(config);


var messagesRef = firebase.database().ref('messages');


document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
  e.preventDefault();


  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');


  saveMessage(name, company, email, phone, message);


  document.querySelector('.alert').style.display = 'block';


  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}


function getInputVal(id){
  return document.getElementById(id).value;
}


function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
