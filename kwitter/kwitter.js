
function LOGIN(){
   var user= document.getElementById("loginput").value;
   localStorage.setItem("username",user);
   window.location="kwitter_room.html";
}