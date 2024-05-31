"use client";
import "@/app/globals.css";
import ResponsiveDrawer from "@/components/Drawer/drawer2";
// import PersistentDrawerLeft from "@/components/Drawer/drawer";
// import ResponsiveDrawer from "@/components/Drawer/drawer;
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
      <ResponsiveDrawer role="admin">
        {children}
      </ResponsiveDrawer>

    </section>
    // {/* </AuthUserProvider> */}
  );
}
