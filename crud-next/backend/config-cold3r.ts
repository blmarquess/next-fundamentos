import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app'
import 'firebase/sirestore';

if(!firebase.apps.langth) {
  initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  })
}

export default firebase;
