import { Box, Chip, Divider, Typography } from "@mui/material";
import React from "react";
import ButtonLearnMore from "./ButtonLearnMore";
// import Grid from "@mui/material/Unstable_Grid2";
function JobCard({ doc }) {
  return (
    <Box
      sx={{
        border: "1px solid",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "5px",
        padding: 5,
        flex: 1,
        bgcolor: "gray",
      }}
    >
      <Box>
        <Box>
          <Typography
            variant="h6"
            sx={{ display: "flex", textAlign: "center", color: "white" }}
          >
            {doc.title}
          </Typography>
        </Box>
        <Divider />
        <Box mt="16px" sx={{ display: "flex", flexWrap: "wrap" }}>
          {doc.skills.map((skill, i) => (
            <Chip
              label={skill}
              key={i}
              sx={{
                bgcolor: "#E74C3C",
                mt: "4px",
                ml: i > 0 ? "6px" : "0px",
                color: "white",
              }}
            />
          ))}
        </Box>
        <Box mt="16px">
          <Typography variant="h13" sx={{ padding: "5px", color: "white" }}>
            {doc.description}
          </Typography>
        </Box>
      </Box>
      <Box mt="16px" sx={{ textAlign: "center" }}>
        <ButtonLearnMore />
      </Box>
    </Box>
  );
}

export default JobCard;
