const firebaseConfig = {
      apiKey: "AIzaSyB-G0X-KvZTGsVL2Xo53dgqJAmB2RqrTaI",
      authDomain: "kwitter-ff9e3.firebaseapp.com",
      databaseURL: "https://kwitter-ff9e3-default-rtdb.firebaseio.com",
      projectId: "kwitter-ff9e3",
      storageBucket: "kwitter-ff9e3.appspot.com",
      messagingSenderId: "836278606424",
      appId: "1:836278606424:web:013bd2d0c3a214121bc82d"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!!";

function addroom(){
room_name = document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
      purpose : "addingroomname"
});
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-" + Room_names);
row = "<div class = 'room_name' id = '" + Room_names + "' onclick = 'redirecttoroomname(this.id)' >#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeITem("room_name")
      localStorage.removeITem("user_name")
      window.location = "index.html";
}