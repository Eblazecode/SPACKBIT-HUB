/**
 * Created by Nas on 4/10/2018.
 */

/**
 * Created by Nas on 3/28/2018.

 */





    var config = {
        apiKey: "AIzaSyBmL2ysOMStkcwSnOYvylKcSh24HfnU2Ps",
        authDomain: "spackbit-contact.firebaseapp.com",
        databaseURL: "https://spackbit-contact.firebaseio.com",
        projectId: "spackbit-contact",
        storageBucket: "spackbit-contact.appspot.com",
        messagingSenderId: "580843942210"
    };
    firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    //Get value
    var name = getInputVal('username');
    var email = getInputVal('useremail');
    var phone = getInputVal('phoneno');
    var message = getInputVal('brief');

    // Save message
    saveMessage(name, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactform').reset();
}

// Function to get form value
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,  email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}

$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});
