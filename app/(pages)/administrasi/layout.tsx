"use client";
import "@/app/styles/globals.css";
import { ResponsiveDrawer } from "@/components/Drawer/drawer2";
import { AppBar, Drawer } from "@mui/material";

// import { AuthUserProvider, useAuth } from "@/firebase/auth/AuthUserProvider";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const auth = useAuth();
  // console.log(auth.user.id);

  //! if role=admin push /administrasi/admin
  //! if role=user push /administrasi

  return (
    // <AuthUserProvider>
    <section>
      <ResponsiveDrawer role="admin">{children}</ResponsiveDrawer>
      {/* <ResponsiveDrawer role="user">{children}</ResponsiveDrawer> */}
    </section>
    // {/* </AuthUserProvider> */}
  );
}
