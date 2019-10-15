import firebase from "./firebase";

export default async function autentication(email, password) {
  let user = sessionStorage.getItem("session");

  if (!user) {
    user = await firebase.auth().signInWithEmailAndPassword(email, password);
    sessionStorage.setItem("session", user.user.uid);
  }
  return user;
}
