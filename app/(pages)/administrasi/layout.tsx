"use client";
import * as React from "react";
import { ResponsiveDrawer } from "@/components/Drawer/drawer2";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = localStorage.getItem("role");

  return (
    <section>
      {user === "admin" ? (
        <ResponsiveDrawer role="admin">{children}</ResponsiveDrawer>
      ) : (
        <ResponsiveDrawer role="user">{children}</ResponsiveDrawer>
      )}
    </section>
  );
}
