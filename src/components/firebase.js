import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCagzIXlFsg5cu5dMlcGFguNPPX1nPpOGw',
  authDomain: 'learnlingo-b8c15.firebaseapp.com',
  databaseURL: 'https://learnlingo-b8c15-default-rtdb.firebaseio.com',
  projectId: 'learnlingo-b8c15',
  storageBucket: 'learnlingo-b8c15.appspot.com',
  messagingSenderId: '947418156492',
  appId: '1:947418156492:web:d87c3bdc4cd2a6ffd02169',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getDatabase(app);
