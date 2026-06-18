// Firebase configuration for Huriaa's Creations
// This uses the Firebase compat SDK (loaded via <script> tags in HTML)
// so it works on plain GitHub Pages without any build step.

const firebaseConfig = {
  apiKey: "AIzaSyBuFyZALLOeBv_XnZoYdPF3J0XGs7SxJR0",
  authDomain: "huriaas-creation.firebaseapp.com",
  projectId: "huriaas-creation",
  storageBucket: "huriaas-creation.firebasestorage.app",
  messagingSenderId: "822780568233",
  appId: "1:822780568233:web:b034efd37b79da4c283fb8",
  measurementId: "G-7JCVDD4ZD2"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
