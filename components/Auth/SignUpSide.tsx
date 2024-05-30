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
import Image from "next/image";
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

export default function SignUpSide() {
  const router = useRouter();
  // const auth = useAuth();
  const [residenceName, setResidenceName] = useState("");
  const [username, setUsername] = useState("");
  const [idCard, setIdCard] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // router.push('/');
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      residenceName: data.get("residenceName"),
      username: data.get("username"),
    });

    try {
      if (residenceName && username && idCard) {
        await signUp({ residenceName, username, idCard });
        // Redirect or show success message after successful signup
        router.push("/");
      } else {
        // Handle form validation errors
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
            "url(https://images.unsplash.com/photo-1667664885297-8e180a9bc667?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
          <Image
            src="/images/sigap.jpg"
            alt="landingpage"
            width={160}
            height={100}
            className="m-4 h-auto w-auto"
          />
          <Typography component="h1" variant="h6" sx={{ mt: 2 }}>
            Form Pendaftaran Akun
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Box
              component="form"
              noValidate
              onClick={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="nama_perumahan"
                label="Nama Perumahan"
                name="nama_perumahan"
                autoComplete="nama perumahan"
                value={residenceName}
                onChange={(e) => setResidenceName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="notelp"
                label="Telepon (No WhatsApp)"
                name="alamat"
                autoComplete="Telepon"
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
                  *Mohon menunggu balasan verifikasi 1-3 hari kerja via WhatsApp
                </Typography>
              </Stack>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 1 }}
              >
                submit
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
    </Grid>
  );
}
