"use client";

import {
  Box,
  Breadcrumbs,
  Divider,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import TitleTable from "@/components/TitleTable/TitleTable";
import ItemDetail from "@/components/ItemsPengembang/ItemDetail";
import ItemDokumen from "@/components/ItemsPengembang/ItemDokumen";
import ItemDokumenCitizen from "../ItemsWarga/ItemDokumen";

export default function DokumenDetail({
  params,
  userType,
}: {
  params: { id: string; slug: string };
  userType: string;
}) {
  const { id } = params;

  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          marginBottom: 1,
        }}
      >
        <Link underline="hover" color="inherit" href="/administrasi/admin">
          Daftar Dokumen
        </Link>
        <Typography color="text.primary">Dokumen Perumahan A</Typography>
      </Breadcrumbs>
      <Paper
        sx={{
          marginBottom: 2,
        }}
      >
        <TitleTable title={`Detail Dokumen A`} />
        <Box
          sx={{
            padding: 2,
          }}
        >
          <section>
            <ItemDetail />
          </section>
          <Divider sx={{ marginY: 2 }} />
          <section>
            <Typography
              variant="h6"
              sx={{
                marginY: 1,
                fontWeight: "bold",
              }}
            >
              Kelengkapan Dokumen
            </Typography>

            {userType === "developer" ? (
              <ItemDokumen />
            ) : (
              <ItemDokumenCitizen />
            )}
          </section>
        </Box>
      </Paper>
    </>
  );
}
