import { Paper, Typography } from "@mui/material";
import React from "react";

export default function DokumenDetail({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const { id } = params;

  return (
    <Paper
      sx={{
        padding: 2,
        marginBottom: 2,
      }}
    >
      <Typography variant="h6" component="h3">
        Detail Dokumen Perumahan A
      </Typography>
      <div>
        <section>
          <h1>Nama Perumahan:</h1>
          <h1>Nama Pengembang/Pengaju:</h1>
          <h1>Alamat/Telepon:</h1>
          <h1>Lokasi:</h1>
          <h1>Kelurahan:</h1>
          <h1>Kecamatan:</h1>
        </section>
        <section>
          <h1>Kelengkapan Dokumen</h1>
        </section>
      </div>
    </Paper>
  );
}
