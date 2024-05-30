import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  AccountCircle,
  Article,
  Drafts,
  ManageAccounts,
  Menu,
} from "@mui/icons-material";
import { Stack, MenuItem, Icon } from "@mui/material";
import router from "next/router";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
  children: React.ReactNode;
  role: string;
}

export default function ResponsiveDrawer(props: Props) {
  const { window, children, role } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const appPages = getAppPagesForRole(role);

  function getAppPagesForRole(role: string) {
    switch (role) {
      case "admin":
        return [
          {
            title: "Daftar Dokumen",
            href: "/administrasi/admin",
          },
          {
            title: "Daftar Pengajuan",
            href: "/administrasi/admin/daftar-pengajuan",
          },
          {
            title: "Daftar Akun",
            href: "/administrasi/admin/daftar-akun",
          },
        ];
      case "user":
        return [
          {
            title: "Pengajuan Dokumen",
            href: "/administrasi",
          },
          {
            title: "Akun Saya",
            href: "/administrasi/akun",
          },
        ];
      default:
        return [];
    }
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {appPages.map((appPage, index) => (
          <ListItem key={appPage.title} disablePadding>
            <ListItemButton href={appPage.href}>
              <ListItemIcon>
                {index - 2 % 2 !== 0 ? <ManageAccounts /> : <Article />}
              </ListItemIcon>
              <ListItemText primary={appPage.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        // sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` },

        // }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Stack direction="row" spacing={2}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                padding: 1,
                fontWeight: "bold",
              }}
            >
              SIGAP PSU MAKASSAR
            </Typography>
          </Stack>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
              <Typography variant="body1" component="h1" sx={{ ml: 1 }}>
                Admin
              </Typography>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
