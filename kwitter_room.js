var firebaseConfig = {
      apiKey: "AIzaSyAa_F_XPoUgs3fDSJLswTZhQrxv7rZj6_0",
      authDomain: "kwitter-project-69bb1.firebaseapp.com",
      databaseURL: "https://kwitter-project-69bb1-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-69bb1",
      storageBucket: "kwitter-project-69bb1.appspot.com",
      messagingSenderId: "836414661057",
      appId: "1:836414661057:web:ba5388ac217767dca20f40"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
