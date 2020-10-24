 const bioo = document.getElementById('ubio');
 const namea = document.getElementById('nameu');
 const save = document.getElementById('savebtn');

 function render(doc){
     let li = document.createElement('li');
     let la = document.createElement('li');
     let name = document.createElement('span');
     let bio = document.createElement('span');

     li.setAttribute('data-id' , doc.id);
     la.setAttribute('data-id' , doc.id);
     name.textContent = doc.data().name;
     bio.textContent = doc.data().bio;
   
     li.appendChild(name);
     la.appendChild(bio);
     
     bioo.appendChild(la);
     namea.appendChild(li);
     
 }
 
//get
db.collection('hmamh').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      render(doc);
      console.log(doc.data())
    })
})


//saving
save.addEventListener('click' , (e) =>{
    e.preventDefault();
    const inputn = document.getElementById('name');
const username = inputn.value;
const inputb = document.getElementById('bio');
const userbio = inputb.value;
    db.collection('hmamh').add({
        name: username,
        bio: userbio
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
})
 
// 
// 
// 
// 
// 
// 
// 
// 
// 

//
function  rendera(doc){
    
       const hawy = document.getElementById('csd')
        let li = document.createElement('li');
        let texte = document.createElement('span');
        
        li.setAttribute('data-id' , doc.id);
        const text = textContent = doc.data().message;
        var today = new Date();
        var time = today.toLocaleTimeString();
           
        
        texte.innerHTML = 

        `    <table class="container" style = "margin-top:20px; margin-bottom: 20px;">
        <tbody>
                  <tr id="ttrr">     
                <td><h3 id="task4" style="text-align: center;list-style-type: none;"> ${text} </h3> 
                <h6 id = "time">${time} </h6> <button id="delet" class="deleteButton">-</button></td>
            </tr>
        </tbody>
    </table>
`   


        

        li.appendChild(texte);
        hawy.appendChild(li); 
           //
        
           const dtl = document.getElementById('delet').addEventListener('click', () => {
            document.querySelector('#ttrr').innerHTML = '';
                })    
                            // document.getElementById('time').innerHTML = time;
                       
        
      
}



//get
db.collection('hmamhmessage').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      rendera(doc);
       console.log(doc.data())
    })
})



//save
const message = document.getElementById('submit');
message.addEventListener('click' , (e) =>{
    e.preventDefault();
    const msg = document.getElementById('input');
    const themg = msg.value;
 db.collection('hmamhmessage').add({
     message : themg
 })
 .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
});








// storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
//     console.log('Uploaded', snapshot.totalBytes, 'bytes.');
     
//     let dbRef = db.collection("images").doc(file.name);
    
//     let setData = dbRef.set({
//         //yourdata here
//         downloadURl: snapshot.downloadURL
//     }) .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
// })













// 
// 
// 
// 
//
// 
// 

// 


//get
// db.collection('hmamhimg').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//       rendera(doc);
//        console.log(doc.data())
//     })
// })


// storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
//     console.log('Uploaded', snapshot.totalBytes, 'bytes.');
//     let dbRef = db.collection("images").doc(file.name);
    
//     let setData = dbRef.set({
//         //yourdata here
//         downloadURl: snapshot.downloadURL
//     }).then( () => {
//         console.log("Data stored in Firestore!");
//     });
// });

















//  storage.storage().ref('users/' + auth.user.uid + '/profile.jpg').put(file).then(function () {
        
//  })