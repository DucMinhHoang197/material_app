import { Box, Chip, Divider, Typography } from "@mui/material";
import React from "react";
import ButtonLearnMore from "./ButtonLearnMore";
// import Grid from "@mui/material/Unstable_Grid2";
function JobCard({ doc }) {
  return (
    <Box
      width={300}
      height={300}
      sx={{
        border: "1px solid",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        borderRadius: "5px",
        margin: "10px",
      }}
    >
      <Box>
        <Typography variant="h6">{doc.title}</Typography>
        <Divider />
        {doc.skills.map((skill, i) => (
          <Chip label={skill} key={i} />
        ))}
        <Typography variant="h7">{doc.description}</Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <ButtonLearnMore />
      </Box>
    </Box>
  );
}

export default JobCard;
