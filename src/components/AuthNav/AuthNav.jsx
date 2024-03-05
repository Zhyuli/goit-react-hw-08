import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
// import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" style={{ textDecoration: "none" }}>
        <Button sx={{ color: "#fff", margin: "0 10px" }}>Register</Button>
      </NavLink>
      <NavLink to="/login" style={{ textDecoration: "none" }}>
        <Button sx={{ color: "#fff", margin: "0 10px" }}>Log In</Button>
      </NavLink>
    </div>
  );
};
