import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAL1pMTCC2HkSK2hRRtNDD7a4tY4Z6AwgY',
  authDomain: 'learnlingo-155f6.firebaseapp.com',
  projectId: 'learnlingo-155f6',
  storageBucket: 'learnlingo-155f6.appspot.com',
  messagingSenderId: '605246707033',
  appId: '1:605246707033:web:3661b39f1d149d6233e848',
  databaseURL: 'https://learnlingo-155f6-default-rtdb.firebaseio.com',
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
