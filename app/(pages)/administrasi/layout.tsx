"use client";
import React, { useEffect, useState } from "react";
import "@/app/styles/globals.css";
import { ResponsiveDrawer } from "@/components/Drawer/drawer2";
import { AppBar, Drawer } from "@mui/material";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setUserRole(role);
  }, []);

  return (
    <section>
      {userRole === "admin" ? (
        <ResponsiveDrawer role="admin">{children}</ResponsiveDrawer>
      ) : (
        <ResponsiveDrawer role="user">{children}</ResponsiveDrawer>
      )}
    </section>
  );
}
