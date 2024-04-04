import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAI1srR7jbCKirO4S8sKgPMS9cqwKBlndo",
  authDomain: "dragon-news-a2f85.firebaseapp.com",
  projectId: "dragon-news-a2f85",
  storageBucket: "dragon-news-a2f85.appspot.com",
  messagingSenderId: "737440628264",
  appId: "1:737440628264:web:ab69a6c4725fad7e403f1d"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;