const firebaseConfig = {
   apiKey: "AIzaSyAKaHzxtaZXm2X5LDLc2nhHo3PcSQuexu4",
   authDomain: "sports-website-689ea.firebaseapp.com",
   databaseURL: "https://sports-website-689ea-default-rtdb.firebaseio.com",
   projectId: "sports-website-689ea",
   storageBucket: "sports-website-689ea.appspot.com",
   messagingSenderId: "158870883039",
   appId: "1:158870883039:web:d623c9244f4325cc91b76a",
   measurementId: "G-34EQHM7RK9"
 };
  firebase.initializeApp(firebaseConfig);
 var userref = firebase.database().ref("userInput")
 document.getElementById("F").addEventListener("submit",fg)
 function fg(s){
    s.preventDefault()
    var name = document.getElementById("ye").value
    sentTO(name)
    ResponseFro(name)
    alert("Submitted Succesfully")
 }
 function sentTO(name){
    newref = userref.push() 
    newref.set({year:name})
 }
  function ResponseFro(name){
     var t = ""
     Iref = firebase.database().ref(name)
     Iref.on("value",(data)=>{t = data.val()
      document.getElementById("TEAM").innerHTML = "Champion is "+ t})
  }