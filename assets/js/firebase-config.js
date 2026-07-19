// Firebase Configuration (modular SDK v10, ES module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgLiVHhLxxLplrgqqBvK1iW2MLPpaSf2o",
  authDomain: "mlt-site-94a65.firebaseapp.com",
  projectId: "mlt-site-94a65",
  storageBucket: "mlt-site-94a65.firebasestorage.app",
  messagingSenderId: "131916366588",
  appId: "1:131916366588:web:c9172c622b943722020d79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
