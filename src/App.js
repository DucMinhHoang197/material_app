import React from "react";
import docs from "./docs.json";
import SearchAppBar from "./component/SearchAppBar";
import JobCard from "./component/JobCard";
import Grid from "@mui/material/Unstable_Grid2";

function App() {
  return (
    <div style={{ backgroundColor: "#222", minHeight: "100vh" }}>
      <SearchAppBar />
      <div
        className="box"
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {docs.slice(0, 4).map((doc, i) => (
            <Grid
              style={{ display: "flex" }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={i}
            >
              <JobCard doc={doc} key={i} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default App;
