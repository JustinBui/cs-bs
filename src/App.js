import "./App.css";
import { LowerDivs } from "./Courses.js";
import { UpperDivs } from "./Courses.js";

function App() {
  return (
    <body>
      <h1 class="title">CS BS</h1>
      <p class="description">
        Attention CSUF computer science majors! Are you tired of not learning
        enough from your computer science professors? Don’t sweat it!
        Introducing CS-BS.com. This website allows the chance for all students
        taking CS classes to drop URL’s or other resources that might be helpful
        for other students to view and to hopefully pass their classes! Computer
        science is not an easy field but we are all here to help one another
        learn and grow.
      </p>
      <h2>Lower Division: </h2>
      <div> {LowerDivs()} </div>
      <h2>Upper Division: </h2>
    </body>
  );
}

export default App;
