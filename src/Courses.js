export function LowerDivs() {
  return (
    <table class="table-class">
      <thead>
        {/* <!-- Headers --> */}

        <tr>
          <th class="course">Course Name</th>
        </tr>
        {/* Courses */}
        <tr>
          <th>
            <a href="cpsc120">CPSC 120: Intro to Programming</a>
          </th>
        </tr>
        <tr>
          <th>
            <a href="../components/cpsc121">
              CSPC 121: Object Oriented Programming
            </a>
          </th>
        </tr>
        <tr>
          <th>
            {" "}
            <a href="../components/cpsc131">CSPC 131: Data Structures</a>{" "}
          </th>
        </tr>
        <tr>
          <th>
            {" "}
            <a href="../components/cpsc223c">CSPC 223C: C Programming</a>{" "}
          </th>
        </tr>
        <tr>
          <th>
            {" "}
            <a href="../components/cpsc223j">
              CSPC 223J: Java Programming
            </a>{" "}
          </th>
        </tr>
        <tr>
          <th>
            {" "}
            <a href="../components/cpsc223n">
              CSPC 223N: Visual C# Programming
            </a>{" "}
          </th>
        </tr>
        <tr>
          <th>
            {" "}
            <a href="../components/cpsc223p">
              CSPC 223P: Python Programming
            </a>{" "}
          </th>
        </tr>
        <tr>
          <th>
            {" "}
            <a href="../components/cpsc223w">
              CSPC 223W: Swift Programming
            </a>{" "}
          </th>
        </tr>
        <tr>
          <th>
            {" "}
            <a href="../components/cpsc240">
              CSPC 240: Computer Org. and Assembly Lang.
            </a>
          </th>
        </tr>
      </thead>
      <tbody id="tableData"></tbody>
    </table>
  );
}

export function UpperDivs() {
  return (
    <table class="table-class">
      <thead>
        {/* <!-- Headers --> */}

        <tr>
          <th class="course">Course Name</th>
        </tr>
        {/* Courses */}
        <tr>
          <th>
            {" "}
            <a href="../components/cpsc254">
              CSPC 254: Software Development with open source systems
            </a>{" "}
          </th>
        </tr>
        <tr>
          <th>
            {" "}
            <a href="../components/cpsc315">
              CSPC 315: Professional Ethics in Computing
            </a>{" "}
          </th>
        </tr>
        <tr>
          <th>
            {" "}
            <a href="../components/cpsc323">
              CPSC 323: Compilers and Languages
            </a>{" "}
          </th>
        </tr>
        <tr>
          <th>
            <a href="../components/cpsc332">
              CSPC 332: File Structures and Database Systems
            </a>{" "}
          </th>
        </tr>
        <tr>
          <th>
            {" "}
            <a href="../components/cpsc335">
              CSPC 335: Algorithm Engineering
            </a>{" "}
          </th>
        </tr>
        <tr>
          <th>
            {" "}
            <a href="../components/cpsc351">
              CSPC 351: Operating Systems Concepts
            </a>{" "}
          </th>
        </tr>
      </thead>
      <tbody id="tableData"></tbody>
    </table>
  );
}
