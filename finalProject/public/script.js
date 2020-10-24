 
 

 
// firebase.auth().signInAnonymously().catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });

// const { auth } = require("firebase");
// const firebase = require("firebase");


//sign up
document.querySelector('.sing-up').addEventListener('click', (e) => {
   
    e.preventDefault();
  

    //get inf
    const email = document.getElementById('signup-email'); 
   const inputv = email.value;

    const password = document.getElementById('signup-password');
    const inputvl = password.value;
    //sign up user
    firebase.auth().createUserWithEmailAndPassword(inputv, inputvl).then(cred => {   
    console.log(cred.user) 
    alert(`done`);
    window.location.href = "./index.html";
        });
});
 
 document.querySelector('#inputsa').addEventListener('click', (e) => {
     e.preventDefault();

//      //inf
     const emaill = document.getElementById('login-email'); 
     const inputva = emaill.value;

    const passwordd = document.getElementById('login-password');
    const inputvla = passwordd.value;
 
 firebase.auth().signInWithEmailAndPassword(inputva, inputvla).then(cred => {
        
    console.log(cred.user) 
    alert(`done`);
    //  window.location.href = "./index.html";
   
});

 })


//  storage.storage().ref('users/' + auth.user.uid + '/profile.jpg').put(file).then(function () {

//  })


function GoogleLogin() {
    //first of all create google provider object

    var provider=new firebase.auth.GoogleAuthProvider();
    //Login with popup window
    firebase.auth().signInWithPopup(provider).then(function () {
        //code executes after successful login

        // window.location="./ind";
    }).catch(function (error) {
        var errorMessage=error.message;
        alert(errorMessage);
    });
}







