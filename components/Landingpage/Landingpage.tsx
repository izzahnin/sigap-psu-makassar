import React from "react";
import Image from "next/image";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import "@/app/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import ButtonDashboard from "../Buttons/ButtonDashboard";
import CardDashboard from "@/components/Cards/CardDashboard";
import CardJumlah from "@/components/Cards/CardJumlah";
import CardVideo from "../Cards/CardVideo";

export default function LandingPage() {
  return (
    <Grid
      container
      component="main"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Box
        // className="flex h-full w-screen flex-col items-center justify-center bg-orange-400"
        sx={{
          background:
            "url(https://storage.googleapis.com/seo-cms/assets/foto_kota_makassar_320f376cf0/foto_kota_makassar_320f376cf0.webp)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          pt: "50px",
        }}
        id="Beranda"
      >
        <Navbar />
        <div className="mt-3 flex h-dvh w-screen justify-center">
          <div className="flex w-full flex-col items-center md:w-4/5">
            {/* <section className="flex items-center  gap-4">
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
            </section> */}
            {/* <section className="flex w-3/4 items-center justify-center">
              <Image
                src="/images/sigap.jpg"
                alt="landingpage"
                width={140}
                height={140}
                className="h-auto w-auto rounded-md"
              />
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  color: "#FEF03E",
                  fontWeight: "bold",
                  fontSize: "24px",
                  textTransform: "uppercase",
                }}
              >
                sistem informasi geospasial prasarana, sarana dan utilitas
                perumahan kota makassar
              </Typography>
            </section> */}
            <section className=" mt-14 flex flex-col gap-14  text-center text-6xl font-bold uppercase tracking-wider text-white">
              <h1>
                layanan penyerahan <br></br> psu perumahan
              </h1>
              <h1>sistem informasi geospasial psu perumahan</h1>
            </section>
          </div>
        </div>
      </Box>
      {/* Sigap PSU MAKASSAR */}
      <Box
        sx={{
          background: "white",
          padding: "2rem",
          color: "#333333",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "50px",
        }}
        id="Layanan"
      >
        <div className="m-12 flex flex-col items-center gap-2 text-center text-6xl font-semibold tracking-wider ">
          <h1>Sigap PSU</h1>
          <h1>Makassar</h1>
          <div className="text-md h-2 w-1/2 bg-[#edcd1f]"></div>
        </div>
        <section className="flex gap-8">
          <CardDashboard
            title="DATA GEO SPASIAL PSU PERUMAHAN"
            description="Data Prasarana Sarana dan Utilitas (PSU) Perumahan yang telah diserahkan ke Pemerintah Kota disajikan dalam webgis"
            image="/images/gis.jpg"
          />
          <CardDashboard
            title="PERNYERAHAN PSU OLEH PENGEMBANG"
            description="Penyerahan Prasarana Sarana dan Utilitas (PSU) Perumahan yang Pengembang (Developer) nya masih Beraktivitas sebagai badan usaha. Pengembang wajib melakukan penyerahan PSU ke pemerintah."
            image="/images/qr-developer.jpeg"
          />
          <CardDashboard
            title="PENYERAHAN PSU PERUMAHAN OLEH WARGA"
            description="Penyerahan Prasarana Sarana dan Utilitas (PSU) Perumahan yang Pengembang (Developer) nya Sudah Tidak Beraktivitas sebagai Badan Usaha, sehingga Penyerahannya dimohonkan oleh Warga Perumahan"
            image="/images/qr-warga.jpeg"
          />
        </section>
      </Box>
      <Box
        sx={{
          background: "#f7f7f7",
          // padding: "6rem",
          color: "#333333",
          width: "100%",
          display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          // mt: "50px",
        }}
        id="Penataan PSU Perumahan"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            width: "50%",
            padding: "6rem",
            paddingRight: "12px",
          }}
        >
          <div className="items-left flex flex-col justify-start gap-1 text-left text-4xl font-semibold -tracking-tight ">
            <h1>Bidang PSU Disperkim</h1>
            <h1>KotaMakassar</h1>
            <div className="text-md h-2 w-1/2 bg-[#edcd1f]"></div>
          </div>
          <p>
            Sistem Informasi Geospasial Prasarana Sarana dan Utilitas Umum (PSU)
            Kota Makassar is dedicated to providing cutting-edge geospatial
            solutions for urban infrastructure. Our team is committed to
            delivering innovative approaches to urban development, leveraging
            geospatial technology to address the evolving needs of modern
            cities.
          </p>
        </Box>
        <div className="flex w-1/2 bg-[url('/images/fotoPSU.jpeg')] bg-cover bg-center bg-repeat"></div>
      </Box>
      <Box
        sx={{
          background: "#edcd1f",
          paddingY: "4rem",
          color: "#3d5975",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <section className="flex gap-8">
          <CardJumlah total={939} title="Izin Perumahan di Kota Makassar" />
          <CardJumlah total={132} title="PSU yang telah Diserahkan" />
          <CardJumlah total={61} title="Capaian Tahun 2023" />
          <CardJumlah total={70} title="Target Tahun 2024" />
        </section>
      </Box>
      <Box
        sx={{
          background: "white",
          padding: "2rem",
          color: "#333333",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "50px",
        }}
      >
        <div className="m-12 flex flex-col items-center gap-2 text-center text-5xl font-semibold tracking-wider ">
          <h1>Dokumentasi & Edukasi</h1>
          <div className="text-md h-2 w-32 bg-[#edcd1f]"></div>
        </div>
        <section className="flex gap-6">
          <CardVideo source="https://youtu.be/juMRBpfU86c?si=kFOC0AdHiYr1L6bB" />
          <CardVideo source="https://youtu.be/lMr-XHUy4pw?si=ccP6fK-Cnf5ukhco" />
        </section>
      </Box>
      <Box>
        <div className="m-12 flex flex-col items-center gap-2 text-center text-5xl font-semibold tracking-wider ">
          <h1>Dokumentasi & Edukasi</h1>
          <div className="text-md h-2 w-32 bg-[#edcd1f]"></div>
        </div>
        <section className="flex gap-6">
          <Image src="/images/kpk.jpg" alt="kpk" width={90} height={120} />
          <Image
            src="/images/KEJAKSAAN.jpg"
            alt="kejaksaan"
            width={90}
            height={120}
          />
          <Image
            src="/images/pertahanan.jpg"
            alt="pertahanan"
            width={90}
            height={120}
          />
          <Image src="/images/REI.jpg" alt="kpk" width={90} height={120} />
          <Image src="/images/kpk.jpg" alt="kpk" width={90} height={120} />
        </section>
      </Box>
    </Grid>
  );
}
