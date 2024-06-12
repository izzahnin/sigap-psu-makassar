import React from "react";
import Image from "next/image";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import "@/app/globals.css";

export default function LandingPage() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Box
        sx={{
          background:
            "url(https://images.unsplash.com/photo-1667664885297-8e180a9bc667?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          bgcolor: "",
        }}
      >
        <div className="flex h-svh w-screen justify-center  ">
          <div className="flex h-full  w-full flex-col  gap-4 p-4 md:w-4/5 md:gap-24 ">
            <section className="flex  items-center  gap-4">
              <Image
                src="/images/logo.png"
                alt="landingpage"
                width={70}
                height={70}
                className="h-auto w-auto"
              />
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ color: "white", fontWeight: "bold", fontSize: "32px" }}
              >
                DINAS PERUMAHAN DAN KAWASAN PERMUKIMAN KOTA MAKASSAR
              </Typography>
            </section>
            <section className="flex flex-col items-center justify-center gap-6 text-white md:flex-row ">
              <Link href="/login" className="w-full md:w-1/3">
                <div className="flex h-20 w-full items-center justify-center rounded-md bg-white bg-opacity-30 font-bold transition-all hover:scale-105 hover:bg-opacity-70 hover:text-black">
                  Pengajuan Dokumen
                </div>
              </Link>
              <Link href="/informasi" className="w-full md:w-1/3">
                <div className="flex h-20 w-full items-center justify-center rounded-md bg-white bg-opacity-30 font-bold transition-all hover:scale-105 hover:bg-opacity-70 hover:text-black">
                  Portal Informasi
                </div>
              </Link>
              <Link href="/#" className="w-full md:w-1/3">
                <div className="flex h-20 w-full items-center justify-center rounded-md bg-white bg-opacity-30 font-bold transition-all hover:scale-105 hover:bg-opacity-70 hover:text-black">
                  Peta GIS
                </div>
              </Link>
            </section>

          </div>
        </div>
      </Box>
    </Grid>
  );
}
