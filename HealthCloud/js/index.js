firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
     // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}

//Drop Down js


function submitClick() {
    var dropdown1=Ultra.value;
    var dropdown2 = Reason.value;
    var name = name_field.value;
    var ph = ph_field.value;

 var key = 'asjbdhd';
 var encrypted = CryptoJS.AES.encrypt(name, key); 
 console.log(encrypted.toString());

 var decrypted = CryptoJS.AES.decrypt(encrypted, key);
 console.log(decrypted.toString(CryptoJS.enc.Utf8));
 

var firebaseRef =firebase.database().ref();
  var d = new Date();
  window.alert(d);
  var patientref = firebaseRef.child("patients");
  patientref.push ({
    name: name,
    number: ph,
    blood_group:dropdown1,
    reason:dropdown2,
    timenow:d
 });

 var ref = firebase.database().ref();
 var obj = 
ref.on("value", function(snapshot) {
   console.log(snapshot.val().hospital);
}, function (error) {
   console.log("Error: " + error.code);
});


var database = firebase.database();
var db = database.ref('hospital');
db.once('value',goData1);
 function goData1(data){
   var hosp = data.val();
   var keys = Object.keys(hosp);
   for( var i =0;i<keys.length;i++)
   {
     var k = keys[i];
     var namee = hosp[k].name;
     var spec = hosp[k].specialist;
     if(dropdown2==spec)
       window.alert(namee);

   }
   }

}