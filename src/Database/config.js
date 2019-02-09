import * as firebase from 'firebase';

  let config = {
    apiKey: "AIzaSyCopmufMwZ0EvbzUHpRtSWcYHum4cOE0aw",
    authDomain: "photowall-9299a.firebaseapp.com",
    databaseURL: "https://photowall-9299a.firebaseio.com",
    projectId: "photowall-9299a",
    storageBucket: "photowall-9299a.appspot.com",
    messagingSenderId: "110561283330"
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  export {database};
