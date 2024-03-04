import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useState, useEffect } from "react";
import { Chip, DialogContent, Typography } from "@mui/material";
import { useLogStore } from "../store";

export default function ButtonLearnMore({ doc }) {
  const [open, setOpen] = useState(false);
  const { isLogged } = useLogStore();

  useEffect(() => {
    localStorage.setItem("isLogged", JSON.stringify(isLogged));
  }, [isLogged]);

  const handleOpen = () => {
    if (isLogged) {
      setOpen(true);
    } else {
      window.location.href = "/login";
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ bgcolor: "#FFA726", color: "#17202A" }}
      >
        Learn More
      </Button>
      {isLogged && (
        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle>{doc.title}</DialogTitle>
          <Box mt="16px" sx={{ display: "flex", flexWrap: "wrap" }}>
            {doc.skills.map((skill, i) => (
              <Chip
                label={skill}
                key={i}
                sx={{
                  bgcolor: "#D74742",
                  mt: "4px",
                  ml: i > 0 ? "6px" : "0px",
                  color: "white",
                }}
              />
            ))}
          </Box>
          <DialogContent>
            <Typography variant="h10" sx={{ padding: "5px", color: "black" }}>
              {doc.description}
            </Typography>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
