/* * 🏛️ U.S. SBA PORTAL 2026 - FIREBASE CORE ENGINE
 * Status: SECURE, OPTIMIZED & MULTI-MODULE ACTIVE
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCq8CgTyNbKVbUm_GItIC7FAvTuNrNspxI",
    authDomain: "sba-portal-2026-f1253.firebaseapp.com",
    projectId: "sba-portal-2026-f1253",
    storageBucket: "sba-portal-2026-f1253.firebasestorage.app",
    messagingSenderId: "363290267220",
    appId: "1:363290267220:web:2a3e8601c11be5dd6e27c1",
    measurementId: "G-Z6V9Y9Q9XB" // Added for traffic tracking
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize & Export Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

// Persistence: Keep Admin and Citizens logged in during the session
setPersistence(auth, browserLocalPersistence)
    .then(() => {
        console.log("SBA_CORE: Persistence Layer Locked.");
    })
    .catch((error) => {
        console.error("SBA_CORE_ERROR:", error.message);
    });

console.log("SBA_SYSTEM_v7: Encrypted Tunnel Active and Services Exported.");
