// firebase.js

// Importa las funciones que necesitas de los SDKs que necesitas
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  // Tu configuración de Firebase aquí
  apiKey: "AIzaSyC4gn1aj1pAh66CsQNn1uNVcYxw5ODt14Y",
  authDomain: "eventos-friki.firebaseapp.com",
  projectId: "eventos-friki",
  storageBucket: "eventos-friki.appspot.com",
  messagingSenderId: "224267774326",
  appId: "1:224267774326:web:a1c4b6c9d839eb156b3257",
  measurementId: "G-NET35J0HV6"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);