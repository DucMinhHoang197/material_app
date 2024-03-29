import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useLogStore } from "../store";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const { isLogged, setLogOut, setLogIn } = useLogStore();
  const navigate = useNavigate();

  const handleClickLogIn = () => {
    setLogIn();
    navigate("/login");
  };

  const handleClickLogOut = () => {
    setLogOut();
    navigate("/");
    window.location.reload();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "#121212" }} position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "inline" }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Job Routing
              </Typography>
            </Box>
            <Box
              sx={{
                display: "inline",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
          </Box>
          <Box sx={{}}>
            {isLogged ? (
              <Button
                onClick={handleClickLogOut}
                variant="contained"
                startIcon={<LogoutSharpIcon />}
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={handleClickLogIn}
                variant="contained"
                startIcon={<LoginSharpIcon />}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
