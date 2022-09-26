//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBeM9BXuhXpBpsPoSXhdM-rwFc47unxV5s",
      authDomain: "kwitter-56395.firebaseapp.com",
      databaseURL: "https://kwitter-56395-default-rtdb.firebaseio.com",
      projectId: "kwitter-56395",
      storageBucket: "kwitter-56395.appspot.com",
      messagingSenderId: "566250484491",
      appId: "1:566250484491:web:5b45242cf4eed3d4ae680e"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    
      user_name = localStorage.getItem("username");
      room_name = localStorage.getItem("room");

      function send(){
            msg = document.getElementById("msg").value;
            firebase.database().ref("/").child(room_name).push({
                  name: user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value="";
      }

      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location.replace("index.html");
      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
msg = message_data["message"];
name1 = message_data["name"];
likes = message_data["like"]

l1= "<h4>"+ name1 +" <img class='user_tick' src='tick.png'></h4>";
l2= "<h4 class='message_h4'>"+ msg +" </h4>";
l3= "<button class='btn btn-warning' id="+ firebase_message_id +" onclick='updatelike(this.id)'>"
l4="<span class='glyphicon glyphicon-thumbs-up'></span> Likes : "+ likes +"</button> "
l= l1+l2+l3+l4;
document.getElementById("output").innerHTML += l
//End code
      } });  }); }
getData();
function updatelike(message_id){
b= message_id; 
likes1= document.getElementById(b).value;
x= Number(likes1)+1;
console.log(x);
firebase.database().ref(room_name).child(message_id).update({
      like:x
});
}
