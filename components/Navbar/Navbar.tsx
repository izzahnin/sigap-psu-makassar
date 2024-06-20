"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = [
  "Beranda",
  "Layanan",
  "Penataan PSU Perumahan",
  "Dokumentasi",
  "Kontak",
];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    console.log(id);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1e2d3b" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              lineHeight: 1,
              color: "#edcd1f",
              textDecoration: "none",
            }}
          >
            <h1>SIGAP PSU</h1>
            <h1>MAKASSAR</h1>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleMenuClick(page)}>
                  <Typography
                    textAlign="center"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 4,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              flexDirection: "column",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              lineHeight: 1,
              color: "inherit",
              alignItems: "center",
              textDecoration: "none",
              width: "100%",
            }}
          >
            <h1>SIGAP PSU</h1>
            <h1>MAKASSAR</h1>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleMenuClick(page)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": { color: "#edcd1f" },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
