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
import logIn from "@/app/firebase/user/logIn";

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

export const SignInSide = () => {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // router.push('/');
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("username") != null && data.get("password")) {
      logIn({
        username: data.get("username")!.toString(),
        password: data.get("password")!.toString(),
      });
    }
    // console.log({
    //   email: data.get("username"),
    //   password: data.get("password"),
    // });
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
              display: { xs: "none", md: "flex" },
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
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                masuk
              </Button>
            </Box>
            <Grid container>
              <Grid item>
                <Link href="signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
