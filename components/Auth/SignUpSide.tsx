"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { ConfirmationDialog } from "@/components/ConfirmationSignup/ConfirmationSignup";
import { useState } from "react";
import { Stack } from "@mui/material";
import signUp from "@/app/firebase/user/signUp";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        SIGAP SPU MAKASSAR
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const SignUpSide = () => {
  const router = useRouter();
  const [residenceName, setResidenceName] = useState("");
  const [username, setUsername] = useState("");
  const [idCard, setIdCard] = useState<File | null>(null);
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false); // State untuk mengontrol dialog konfirmasi

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      residenceName: data.get("residenceName"),
      username: data.get("username"),
    });

    try {
      if (residenceName && username && idCard) {
        await signUp({ residenceName, username, idCard });
        // Menampilkan dialog konfirmasi
        setConfirmationDialogOpen(true);
      } else {
        console.error("Please fill in all the required fields.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setIdCard(file);
  };

  const handleCloseConfirmationDialog = () => {
    // Menutup dialog konfirmasi
    setConfirmationDialogOpen(false);
    // Redirect ke halaman utama setelah menutup dialog
    router.push("/");
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://storage.googleapis.com/seo-cms/assets/foto_kota_makassar_320f376cf0/foto_kota_makassar_320f376cf0.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="h1"
            sx={{
              mt: 4,
              display: "flex",
              flexDirection: "column",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              lineHeight: 1,
              fontSize: "2rem",
              textDecoration: "none",
            }}
          >
            Sigap PSU Makassar
          </Typography>
          <Typography component="h1" variant="h6" sx={{ mt: 2 }}>
            Form Pendaftaran Akun
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="residenceName"
                label="Nama Perumahan"
                name="residenceName"
                autoComplete="nama perumahan"
                value={residenceName}
                onChange={(e) => setResidenceName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Telepon (No WhatsApp)"
                name="username"
                autoComplete="Telepon"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <Stack spacing={1}>
                <Typography variant="body1">
                  Masukkan Foto KTP Pengembang:
                </Typography>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="image/*"
                  onChange={handleChange}
                />
                <Typography variant="caption">
                  *Foto KTP hanya digunakan untuk verifikasi akun pengembang
                </Typography>
                <Typography variant="caption">
                  *Mohon menunggu balasan verifikasi 1x24 jam di hari kerja via WhatsApp
                </Typography>
              </Stack>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 1 }}
              >
                Submit
              </Button>
            </Box>

            <Grid container>
              <Grid item>
                <Link href="login" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>

      {/* Menampilkan ConfirmationDialog */}
      <ConfirmationDialog
        open={confirmationDialogOpen}
        onClose={handleCloseConfirmationDialog}
      />
    </Grid>
  );
};
