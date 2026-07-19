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

// Initialize Firebase. Если инициализация упадёт (например, домен сайта
// не добавлен в Firebase, заблокирован доступ к gstatic.com, или ошибка
// в самом ключе) — показываем понятный баннер на странице вместо того,
// чтобы вся система аккаунтов молча переставала работать.
let app, auth, db;
try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (err) {
  console.error("[MLT] Firebase init failed:", err);
  showFirebaseErrorBanner(err);
}

function showFirebaseErrorBanner(err){
  const show = () => {
    const bar = document.createElement("div");
    bar.textContent = "Система аккаунтов недоступна: не удалось подключиться к Firebase (" + (err && err.message || err) + "). Обновите страницу или сообщите администратору.";
    bar.style.cssText = "position:fixed;top:0;left:0;right:0;z-index:99999;background:#c0392b;color:#fff;font:14px/1.4 sans-serif;padding:10px 16px;text-align:center;";
    document.body.prepend(bar);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", show);
  else show();
}

export { app, auth, db };
