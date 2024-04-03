import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import kritesh from "../../src/assests/images/circle-avatar.png";
import { Link, useNavigate } from "react-router-dom";

const navBarItems = [
  { page: "/", buttonName: "About Me" },
  { page: "/contactme", buttonName: "Projects" },
  { page: "/contactme", buttonName: "Contact Me" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const showNavBar = false;
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(!showNavBar);
  };
  const navigate = useNavigate();
  const handleCloseNavMenu = () => navigate("/");

  return (
    <AppBar style={{ background: "#2E3B55" }}>
      <Container maxWidth="xll">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navBarItems.map((item) => (
                <Link
                  onClick={handleCloseNavMenu}
                  key={item.buttonName}
                  to={item.page}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem>
                    <Typography sx={{ color: "black" }} textAlign="center">
                      {item.buttonName}{" "}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box>
            <Avatar
              alt="Kritesh Picture"
              src={kritesh}
              sx={{ width: 50, height: 50 }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  ml: 15,
                  fontFamily: "monospace",
                  fontWeight: 800,
                  letterSpacing: ".2rem",
                  textDecoration: "none",
                  fontSize: 30,
                  color: "white",
                }}
              >
                KRITESH POKHREL
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navBarItems.map((item) => (
              <Link
                key={item.buttonName}
                to={item.page}
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={item.buttonName}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                  }}
                >
                  {item.buttonName}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
