import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks/useAuth";
// import css from "./AppBar.module.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

// export const AppBar = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <header className={css.header}>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// };

export const DrawerAppBar = () => {
  const { isLoggedIn } = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Видалено const container, оскільки використання document.body не змінюється

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Navigation />
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
          </NavLink>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>

      {/* Якщо потрібен Drawer для мобільних пристроїв, можна реалізувати тут */}
    </Box>
  );
};
