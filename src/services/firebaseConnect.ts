import firebase from 'firebase/compat/app';
import authConfig from '../services/keys.json'

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: authConfig.REACT_APP_API_KEY ,
  authDomain: authConfig.REACT_APP_AUTH_DOMAIN,
  databaseURL: authConfig.REACT_APP_DATABASE_URL,
  projectId: authConfig.REACT_APP_PROJECT_ID,
  storageBucket: authConfig.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: authConfig.REACT_APP_MESSAGING_SENDER_ID,
  appId: authConfig.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export {firebase, auth, database }
