import "./App.css";
import { LowerDivs } from "./Courses.js";
import { UpperDivs } from "./Courses.js";

import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "firebase/firestore";
import { useFirestoreDocData, useFirestore } from "reactfire";
export default App;

function Burrito() {
  // easily access the Firestore library
  const burritoRef = useFirestore().collection("CS").doc("CPSC 120");

  // subscribe to a document for realtime updates. just one line!
  const { status, data: text } = useFirestoreDocData(burritoRef);

  // easily check the loading status
  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>;
  }

  return <p>The burrito is {text}!</p>;
}

function App() {
  return (
    //   <Router>
    //     <h1 class="title">CS BS</h1>
    //     <p class="description">
    //       Attention CSUF computer science majors! Are you tired of not learning
    //       enough from your computer science professors? Don’t sweat it!
    //       Introducing CS-BS.com. This website allows the chance for all students
    //       taking CS classes to drop URL’s or other resources that might be helpful
    //       for other students to view and to hopefully pass their classes! Computer
    //       science is not an easy field but we are all here to help one another
    //       learn and grow.
    //     </p>
    //     <h2>Lower Division: </h2>
    //     <div> {LowerDivs()} </div>
    //     <h2>Upper Division: </h2>
    //     <div> {UpperDivs()} </div>
    //   </Router>
    <div className="App">
      <Burrito />
    </div>
  );
}
