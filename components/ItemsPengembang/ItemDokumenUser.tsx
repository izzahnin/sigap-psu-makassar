"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card, Icon, TextField } from "@mui/material";
import { AttachFile } from "@mui/icons-material";

function createData(title: string, file: string) {
  return { title, file };
}

const rows = [
  createData("Nama Perumahan", ""),
  createData("Nama Pengembang", ""),
  createData("Alamat/Telepon", ""),
  createData("Lokasi", ""),
  createData("Kelurahan", ""),
  createData("Kecamatan", ""),
  createData("Surat Permohonan", ""),
  createData("KTP Direktur/Direktris", ""),
  createData("NPWP Perusahaan", ""),
  createData("Akta Pendirian", ""),
  createData("Surat Pernyataan kebenaran dokumen", ""),
  createData(
    "Surat Peryataan pengembangan Untuk Menyerahkan PSU (Pelepasan Hak)",
    "",
  ),
  createData("Site Plan awal/induk", ""),
  createData("Site Plan perubahan (bila ada)", ""),
  createData(
    "Peta Jaringan/Site plan diarsir beserta luasannya PSU Rencana Penyerahan",
    "",
  ),
  createData("Izin Lokasi dari BPN Kota Makassar", ""),
  createData("Akte Jual Beli dan Surat Kepemilikan Lahan (HGB Induk)", ""),
  createData("Rekomendai TPU/Sertifikat Kepemilikan lahan TPU", ""),
  createData("Rekomendasi Peruntukan lahan/Lokasi Pembangunan Perumahan", ""),
  createData("Sertifikat PSU / Pemecahan / Pelepasan Hak", ""),
  createData("Bukti pembayaran uang kompensasi lahan kuburan/pemakaman", ""),
  createData("Jenis / Rincian / Volume dan luasan PSU Rencana Penyerahan", ""),
];

export default function ItemDokumenUser() {
  // Fungsi untuk membuka PDF di tab baru
  const openPDFInNewTab = () => {
    window.open("/file/pdf.pdf", "_blank");
  };

  return (
    <TableContainer>
      <Table
        sx={{ maxWidth: 800 }}
        size="small"
        aria-label="a dense table"
      >
        <TableBody
          sx={{
            borderBottom: "none",
          }}
        >
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ borderBottom: "none" }} // Remove the divider between rows
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">
                <TextField size="small" variant="outlined" label={row.title} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
