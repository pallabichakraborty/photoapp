import * as firebase from 'firebase';

  let config = {
    
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  export {database};
