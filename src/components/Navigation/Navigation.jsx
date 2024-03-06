import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "@mui/material/Button";
// import css from "./Navigation.module.css";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Button sx={{ color: "#fff", margin: "0 10px" }}>Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" style={{ textDecoration: "none" }}>
          <Button sx={{ color: "#fff", margin: "0 10px" }}>Contacts</Button>
        </NavLink>
      )}
    </nav>
  );
};
