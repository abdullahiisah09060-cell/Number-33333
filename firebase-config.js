/* * 🏛️ TITAN V15 PRO - SUPREME ENGINE
 * Status: HIGH-SPEED PERSISTENCE & CACHE ACTIVE
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCq8CgTyNbKVbUm_GItIC7FAvTuNrNspxI",
    authDomain: "sba-portal-2026-f1253.firebaseapp.com",
    projectId: "sba-portal-2026-f1253",
    storageBucket: "sba-portal-2026-f1253.firebasestorage.app",
    messagingSenderId: "363290267220",
    appId: "1:363290267220:web:2a3e8601c11be5dd6e27c1",
    measurementId: "G-Z6V9Y9Q9XB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);

// Initialize Firestore with HIGH-SPEED CACHING
export const db = initializeFirestore(app, {
    localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
});

// Initialize Analytics
export const analytics = getAnalytics(app);

// Keep Users Logged In
setPersistence(auth, browserLocalPersistence)
    .then(() => console.log("TITAN_V15: Speed & Persistence Layers Locked."))
    .catch((error) => console.error("TITAN_ENGINE_ERROR:", error.message));

export default app;
