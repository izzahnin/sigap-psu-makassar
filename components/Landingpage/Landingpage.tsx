import React from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import "@/app/globals.css";

export default function LandingPage() {
  return (
    <Box
      sx={{
        background:
          "url(https://images.unsplash.com/photo-1667664885297-8e180a9bc667?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        bgcolor: "",
      }}
    >
      <div className="flex h-svh w-screen justify-center bg-blue-950 bg-opacity-65 align-middle ">
        <div className="flex h-full  w-full flex-col justify-center gap-4 p-4 md:w-4/5 md:gap-24 ">
          <section className="flex  items-center justify-center gap-4">
            <Image
              src="/images/sigap.jpg"
              alt="landingpage"
              width={120}
              height={120}
              className="h-auto w-auto"
            />
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Selamat Datang di SIGAP
            </Typography>
          </section>
          <section className="flex flex-col items-center justify-center gap-6 text-white md:flex-row ">
            <div className="flex h-20 w-full  items-center justify-center rounded-md bg-white bg-opacity-30 font-bold transition-all hover:scale-105 hover:bg-opacity-70 hover:text-black md:w-1/3 ">
              <Link href="/login">Pengajuan Dokumen</Link>
            </div>
            <div className="flex h-20 w-full  items-center justify-center rounded-md bg-white bg-opacity-30 font-bold  transition-all hover:scale-105 hover:bg-opacity-70 hover:text-black md:w-1/3 ">
              <Link href="/informasi">Portal Informasi</Link>
            </div>
            <div className="flex h-20 w-full  items-center justify-center rounded-md bg-white bg-opacity-30  font-bold transition-all hover:scale-105 hover:bg-opacity-70 hover:text-black md:w-1/3 ">
              <Link href="/#">Peta GIS</Link>
            </div>
          </section>
        </div>
      </div>
    </Box>
  );
}
