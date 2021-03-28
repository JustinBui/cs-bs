import "./App.css";

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
      <h2>All Courses: </h2>
      <table class="table-class">
        <thead>
          {/* <!-- Headers --> */}

          <tr>
            <th class="course">Course Name</th>
            <th class="resources">Resources</th>
          </tr>
          {/* Courses */}
          <tr>
            <th>CSPC 120</th>
            <th class="resources">
              <a href="https://www.youtube.com/watch?v=18c3MTX0PK0&list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb ">
                sifuhsef
              </a>
            </th>
          </tr>
          <tr>
            <th>CSPC 121</th>
          </tr>
        </thead>
        <tbody id="tableData"></tbody>
      </table>
    </body>
  );
}

export default App;
