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

export default function DokumenDetail({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const { id } = params;

  const dokumenName = [
    "Surat Permohonan",
    "KTP Direktur/Direktris",
    "NPWP Perusahaan",
    "Akta Pendirian",
    "Surat Pernyataan kebenaran dokumen",
    "Surat Peryataan pengembangan Untuk Menyerahkan PSU (Pelepasan Hak)",
    "Site Plan awal/induk",
    "Site Plan perubahan (bila ada)",
    "Peta Jaringan/Site plan diarsir beserta luasannya PSU Rencana Penyerahan",
    "Izin Lokasi dari BPN Kota Makassar",
    "Akte Jual Beli dan Surat Kepemilikan Lahan (HGB Induk)",
    "Rekomendai TPU/Sertifikat Kepemilikan lahan TPU",
    "Rekomendasi Peruntukan lahan/Lokasi Pembangunan Perumahan",
    "Sertifikat PSU / Pemecahan / Pelepasan Hak",
    "Bukti pembayaran uang kompensasi lahan kuburan/pemakaman",
    "Jenis / Rincian / Volume dan luasan PSU Rencana Penyerahan",
  ];

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

            <ItemDokumen />
          </section>
        </Box>
      </Paper>
    </>
  );
}
