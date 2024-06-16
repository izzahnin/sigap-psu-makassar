"use client";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AccountCircle,
  Article,
  Drafts,
  Logout,
  ManageAccounts,
} from "@mui/icons-material";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
  children: React.ReactNode;
  role: string;
}

export const ResponsiveDrawer: React.FC<Props> = (props) => {
  const { window, children, role } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const router = useRouter();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    setOpenLogoutDialog(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutConfirm = () => {
    // Handle logout logic here
    router.push("/login"); // For example, redirecting to logout page
  };

  const handleLogoutCancel = () => {
    setOpenLogoutDialog(false);
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
                {index - (2 % 2) !== 0 ? <ManageAccounts /> : <Article/>}
              </ListItemIcon>
              <ListItemText primary={appPage.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
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
              onClick={handleMenu}
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
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerClose}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
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

      {/* Logout Confirmation Dialog */}
      <Dialog
        open={openLogoutDialog}
        onClose={handleLogoutCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Logout Confirmation</DialogTitle>
        <DialogContent>
          <Typography variant="body1" component="div">
            Are you sure you want to logout?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogoutCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogoutConfirm} color="primary" autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
