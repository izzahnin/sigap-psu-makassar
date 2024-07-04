import React from "react";
import Image from "next/image";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import "@/app/styles/globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { ButtonDashboard } from "@/components/Buttons/ButtonDashboard";
import { CardJumlah } from "@/components/Cards/CardJumlah";
import { CardDukungan } from "@/components/Cards/CardDukungan";

export const LandingPage = () => {
  return (
    <Grid
      container
      component="main"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Box
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
        <div className="mt-3 flex h-dvh w-screen justify-center bg-[#1e2d3b] bg-opacity-60">
          <div className="flex w-full flex-col items-center md:w-4/5 ">
            <section className=" mt-14 flex flex-col gap-14  text-center  font-bold uppercase tracking-wider text-white">
              <h1 className="text-6xl">
                layanan penyerahan <br></br> psu perumahan
              </h1>
              <h1 className="text-5xl">
                sistem informasi geospasial psu perumahan
              </h1>
            </section>
          </div>
        </div>
      </Box>
      {/* Sigap PSU MAKASSAR */}
      <Box
        sx={{
          background: "#f7f7f7",
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
        <div className="m-12 flex flex-col items-center gap-2 text-center text-5xl font-semibold tracking-wider ">
          <h1>Alur Penyerahan PSU Perumahan</h1>
          <div className="text-md h-2 w-1/2 bg-[#edcd1f]"></div>
        </div>
        <section className="flex gap-8">
          <div>
            <Image src="/images/1.jpg" width={500} height={500} alt="Alur1" />
          </div>
          <div>
            <Image src="/images/2.jpg" width={500} height={500} alt="Alur2" />
            <Link
              href="https://bit.ly/ContohUsulanPSUWarga"
              className="text-center hover:text-blue-500"
            >
              <Typography>https://bit.ly/ContohUsulanPSUWarga</Typography>
            </Link>
          </div>
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
        id="Layanan"
      >
        <div className="m-12 flex flex-col items-center gap-2 text-center text-6xl font-semibold tracking-wider ">
          <h1>Sigap PSU</h1>
          <h1>Makassar</h1>
          <div className="text-md h-2 w-1/2 bg-[#edcd1f]"></div>
        </div>
        <section className="flex gap-8">
          <Card sx={{ maxWidth: 345 }}>
            <Link href="http://datapsumakassar.gis.co.id" target="_blank">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/gis.jpg"
                  alt="gis"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    DATA GEO SPASIAL PSU PERUMAHAN
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Data Prasarana Sarana dan Utilitas (PSU) Perumahan yang
                    telah diserahkan ke Pemerintah Kota disajikan dalam webgis
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <Link href="/login" target="_blank">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/qr-developer.jpeg"
                  alt="ini"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    PERNYERAHAN PSU OLEH PENGEMBANG
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Penyerahan Prasarana Sarana dan Utilitas (PSU) Perumahan
                    yang Pengembang (Developer) nya masih Beraktivitas sebagai
                    badan usaha. Pengembang wajib melakukan penyerahan PSU ke
                    pemerintah.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <Link href="/login" target="_blank">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/qr-warga.jpeg"
                  alt="ini"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    PENYERAHAN PSU PERUMAHAN OLEH WARGA
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Penyerahan Prasarana Sarana dan Utilitas (PSU) Perumahan
                    yang Pengembang (Developer) nya Sudah Tidak Beraktivitas
                    sebagai Badan Usaha, sehingga Penyerahannya dimohonkan oleh
                    Warga Perumahan
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </section>
      </Box>
      <Box
        sx={{
          background: "#f7f7f7",
          color: "#333333",
          width: "100%",
          display: "flex",
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
          <CardJumlah total={152} title="PSU yang telah Diserahkan" />
          <CardJumlah total={61} title="Capaian Tahun 2023" />
          <CardJumlah total={70} title="Target Tahun 2024" />
        </section>
      </Box>
      <Box
        id="Dokumentasi"
        sx={{
          background: "white",
          padding: "2rem",
          color: "#333333",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: "50px",
        }}
      >
        <div className="m-12 flex flex-col items-center gap-2 text-center text-5xl font-semibold tracking-wider ">
          <h1>Regulasi</h1>
          <div className="text-md h-2 w-32 bg-[#edcd1f]"></div>
        </div>
        <section className="flex gap-6">
          <Card
            sx={{
              maxWidth: 345,
              padding: "1rem",
              hover: {
                backgroundColor: "#E0E0E0",
                fontWeight: "bold",
              },
            }}
          >
            <Link
              href="https://drive.google.com/file/d/1q1quR7Du2hYnhxu1Ogeo-_SpN8zeB85m/view?usp=sharing"
              target="_blank"
            >
              <Typography>
                UNDANG-UNDANG REPUBLIK INDONESIA NOMOR 1 TAHUN 2011 TENTANG
                PERUMAHAN DAN KAWASAN PERMUKIMAN
              </Typography>
            </Link>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              padding: "1rem",
              hover: {
                backgroundColor: "#E0E0E0",
                fontWeight: "bold",
              },
            }}
          >
            <Link
              href="https://drive.google.com/file/d/1wljhtsPfzznfEHuKfl0RF7GcIe6DCkci/view?usp=sharing"
              target="_blank"
            >
              <Typography>
                PERATURAN WALIKOTA MAKASSAR NOMOR 86 TAHUN 2016 TENTANG
                KEDUDUKAN, SUSUNAN ORGANISASI, TUGAS DAN FUNGSI SERTA TATA KERJA
                DINAS PERUMAHAN DAN KAWASAN PERMUKIMAN
              </Typography>
            </Link>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              padding: "1rem",
              hover: {
                backgroundColor: "#E0E0E0",
                fontWeight: "bold",
              },
            }}
          >
            <Link
              href="https://drive.google.com/file/d/1wljhtsPfzznfEHuKfl0RF7GcIe6DCkci/view?usp=sharingg"
              target="_blank"
            >
              <Typography>
                PERDA KOTA MAKASSAR NOMOR 1 TAHUN 2023 TENTANG PENYEDIAAN,
                PENYERAHAN DAN PENGELOLAAN PRASARANA, SARANA DAN
                UTILITAS UMUM PERUMAHAN
              </Typography>
            </Link>
          </Card>
        </section>
      </Box>
      <Box
        id="Dokumentasi"
        sx={{
          background: "#f7f7f7",
          padding: "2rem",
          color: "#333333",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: "50px",
        }}
      >
        <div className="m-12 flex flex-col items-center gap-2 text-center text-5xl font-semibold tracking-wider ">
          <h1>Dokumentasi & Edukasi</h1>
          <div className="text-md h-2 w-32 bg-[#edcd1f]"></div>
        </div>
        <section className="flex gap-6">
          {/* //! CardVideocomponent buat run build error  
          //* Tidak ada error di log hanya saat run build
          */}
          {/* <CardVideo source="juMRBpfU86c?si=kFOC0AdHiYr1L6bB" />
          <CardVideo source="lMr-XHUy4pw?si=ccP6fK-Cnf5ukhco" /> */}

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="iframe"
              height="400"
              src="https://www.youtube.com/embed/lMr-XHUy4pw?si=ccP6fK-Cnf5ukhco"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="iframe"
              height="400"
              src="https://www.youtube.com/embed/juMRBpfU86c?si=kFOC0AdHiYr1L6bB"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Card>
        </section>
      </Box>
      <Box
        sx={{
          background: "white",
          // padding: "6rem",
          color: "#333333",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: "50px",
          gap: "4rem",
          py: "50px",
        }}
      >
        <div className="flex flex-col items-center gap-2 text-center text-2xl font-semibold tracking-wider ">
          <h1>DIDUKUNG DAN DISUPERVISI</h1>
          <div className="text-md h-2 w-32 bg-[#edcd1f]"></div>
        </div>
        <section className="flex items-center justify-center gap-14 align-middle">
          <CardDukungan src="/images/kpk.jpg" alt="kejaksaan" width={120} />
          <CardDukungan
            src="/images/KEJAKSAAN.jpg"
            alt="kejaksaan"
            width={120}
          />
          <CardDukungan
            src="/images/pertahanan.jpg"
            alt="pertahanan"
            width={100}
          />
          <CardDukungan src="/images/REI.jpg" alt="rei" width={90} />
          <CardDukungan
            src="/images/kotakita.jpg"
            alt="kota kita"
            width={120}
          />
        </section>
      </Box>
      <Box
        id="Kontak"
        sx={{
          background: "#f7f7f7",
          padding: "2rem",
          color: "#333333",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: "50px",
        }}
      >
        <div className="m-12 flex flex-col items-center gap-2 text-center text-5xl font-semibold tracking-wider ">
          <h1>Kontak Kami</h1>
          <div className="text-md h-2 w-32 bg-[#edcd1f]"></div>
        </div>
        <section className="flex gap-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d496.68437593390195!2d119.44118282082202!3d-5.18775523616285!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee25d5559ca0b%3A0x1e5bccc0524e14d1!2sDinas%20Perumahan%20Kota%20Makassar!5e0!3m2!1sen!2sid!4v1718277548130!5m2!1sen!2sid"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
          <div className="flex flex-col items-start gap-2">
            <Typography variant="h5">Alamat:</Typography>
            <Typography>Jl Sultan Alauddin No 309</Typography>
            <Typography>Makassar, Sulsel, Indonesia</Typography>
            <Typography variant="h5">Email:</Typography>
            <Typography>info@sigappsumakassar.com</Typography>
            <Typography variant="h5">Phone:</Typography>
            <Typography>+123-456-7890</Typography>
          </div>
        </section>
      </Box>
    </Grid>
  );
};
