import React from "react";
import { firebase } from "../firebase/Firebase";

function Home(props) {
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </div>
  );
}

export default Home;
