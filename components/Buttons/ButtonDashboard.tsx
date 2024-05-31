import { Button, Link } from "@mui/material";
import React from "react";

interface ButtonDashboardProps {
  title: string;
  href: string;
}

export default function ButtonDashboard(props: ButtonDashboardProps) {
  const { title, href } = props;
  return (
    <button className="w-40 text-wrap rounded-md bg-white  p-2 text-left uppercase text-black">
      <Link className="no-underline" href={href}>
        {title}
      </Link>
    </button>
  );
}
