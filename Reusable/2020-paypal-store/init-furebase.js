const firebaseConfig = {
  apiKey: "AIzaSyAdRu4BRqYJexvkuu_Y4suiaOwXmf7RZy4",
  authDomain: "super-store-5af00.firebaseapp.com",
  databaseURL: "https://super-store-5af00.firebaseio.com",
  projectId: "super-store-5af00",
  storageBucket: "super-store-5af00.appspot.com",
  messagingSenderId: "412459478780",
  appId: "1:412459478780:web:96d6b8d3186914dddeb179"
};


var test;
window.onload = function(e){
    // Initialize Firebase
    test = firebase.initializeApp(firebaseConfig);
}


