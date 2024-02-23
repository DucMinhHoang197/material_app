import React from "react";
import docs from "./docs.json";
import SearchAppBar from "./component/SearchAppBar";
import JobCard from "./component/JobCard";

function App() {
  return (
    <div>
      <SearchAppBar />
      {docs.slice(0, 4).map((doc, i) => (
        <JobCard doc={doc} key={i} />
      ))}
    </div>
  );
}

export default App;
