import firebase from 'firebase/compat/app';
import authConfig from '../services/keys.json'

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: authConfig.API_KEY ,
  authDomain: authConfig.AUTH_DOMAIN,
  databaseURL: authConfig.DATABASE_URL,
  projectId: authConfig.PROJECT_ID,
  storageBucket: authConfig.STORAGE_BUCKET,
  messagingSenderId: authConfig.MESSAGING_SENDER_ID,
  appId: authConfig.APP_ID
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export {firebase, auth, database }
