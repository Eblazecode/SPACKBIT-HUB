/**
 * Created by Nas on 4/10/2018.
 */

/**
 * Created by Nas on 3/28/2018.

 */
(document).ready(function() {
    if ($('#contactform').length > 0 ) {
        contactScript('forcontact');
    }
});

// Initialize Firebase
function contactScript(value) {
    let config = {
        apiKey: "AIzaSyBmL2ysOMStkcwSnOYvylKcSh24HfnU2Ps",
        authDomain: "spackbit-contact.firebaseapp.com",
        databaseURL: "https://spackbit-contact.firebaseio.com",
        projectId: "spackbit-contact",
        storageBucket: "spackbit-contact.appspot.com",
        messagingSenderId: "580843942210"
    };
    firebase.initializeApp(config);

    let b = firebase.database().ref("messages");
    $("#contactform").submit(function(config) { $(this), console.log("Submit to Firebase");
    let c = $("#username").val(),
        d = $("#useremail").val(),
        f = { name: c, email: d};
    return b.push(f).then(function(config) {
        $(".sucess").css("display", "block"),
            $(".formsuccess").css("display", "none") }), !1 })
}


function init(){
    imgobj =document.getElementById('mac');
    imgobj.style.position='relative';
    imgobj.style.left='opx';

}
function moveright (){
    imgobj.style.left = parseInt(imgobj.style.left)+10+'px';
    animate = setTimeout(moveright,100);

}
function stop() {
    clearTimeout(animate);
    imgobj.style.left = '0px';
}

window.onload=init;

function homein(){
    let but1 =document.getElementById('home');
    but1.style.backgroundColor="blue";
    but1.style.fontSize='5pt';
}
function homeout(){
    let but1 =document.getElementById('home');
    but1.style.backgroundColor="black";
    but1.style.fontSize='10pt';
}

function aboutin(){
    let but1 =document.getElementById('about');
    but1.style.backgroundColor="red";
    but1.style.fontSize='5pt';
}
function aboutout(){
    let but1 =document.getElementById('about');
    but1.style.backgroundColor="black";
    but1.style.fontSize='10pt';
}

function conin(){
    let but1 =document.getElementById('contact');
    but1.style.backgroundColor="pink";
    but1.style.fontSize='5pt';
}
function conout(){
    let but1 =document.getElementById('contact');
    but1.style.backgroundColor="black";
    but1.style.fontSize='10pt';
}

function view1() {
    let element = document.getElementById("viewans1");
    element.classList.toggle("viewans1");
}

function view2() {
    let element = document.getElementById("viewans1");
    element.classList.toggle("viewans2");
}

function view3() {
    let element = document.getElementById("viewans1");
    element.classList.toggle("viewans3");
}

function view4() {
    let element = document.getElementById("viewans1");
    element.classList.toggle("viewans4");
}




$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});
