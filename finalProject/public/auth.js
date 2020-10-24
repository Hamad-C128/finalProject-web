const crd = document.getElementById('csd');
const chacker = document.getElementById('myonoffswitch');
let gid =  document.getElementById('hide');
let edtb = document.getElementById('edit');


//listen
 
firebase.auth().onAuthStateChanged(function (user) {
    if (user ) {


        console.log(`user logged in :` ,user)
        crd.style.visibility = "visible";
        edtb.style.visibility = "visible";
        gid.innerHTML= 'Logout';
        
    

        
       // User is signed in.
    } 
    // else if (chacker.checked ){
    //      isAnonymous == true
    //      console.log(`user logged in :` ,user)
    // } 
    else {
        console.log(`user logged out`)
        gid.innerHTML= 'login'
        crd.style.visibility = "hidden";
        edtb.style.visibility = "hidden";
        document.getElementById('out').style.marginTop = '-50px';
        // User is signed out.
    }

});
// var user = firebase.auth().currentUser;

// if (user != null) {
//   user.providerData.forEach(function (profile) {
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }
 


 
gid.addEventListener('click', (e) => {
    e.preventDefault();

if(gid.innerHTML == 'Logout'){

    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });

}
else if(gid.innerHTML == 'login'){
    window.location.href = "./indexs.html";
}
})


