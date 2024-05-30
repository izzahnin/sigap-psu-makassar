import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card, Icon } from "@mui/material";
import { AttachFile } from "@mui/icons-material";

function createData(title: string, file: string) {
  return { title, file };
}

const rows = [
  createData("Surat Permohonan", "file"),
  createData("KTP Direktur/Direktris", "file"),
  createData("NPWP Perusahaan", "file"),
  createData("Akta Pendirian", "file"),
  createData("Surat Pernyataan kebenaran dokumen", "file"),
  createData(
    "Surat Peryataan pengembangan Untuk Menyerahkan PSU (Pelepasan Hak)",
    "file",
  ),
  createData("Site Plan awal/induk", "file"),
  createData("Site Plan perubahan (bila ada)", "file"),
  createData(
    "Peta Jaringan/Site plan diarsir beserta luasannya PSU Rencana Penyerahan",
    "file",
  ),
  createData("Izin Lokasi dari BPN Kota Makassar", "file"),
  createData("Akte Jual Beli dan Surat Kepemilikan Lahan (HGB Induk)", "file"),
  createData("Rekomendai TPU/Sertifikat Kepemilikan lahan TPU", "file"),
  createData(
    "Rekomendasi Peruntukan lahan/Lokasi Pembangunan Perumahan",
    "file",
  ),
  createData("Sertifikat PSU / Pemecahan / Pelepasan Hak", "file"),
  createData(
    "Bukti pembayaran uang kompensasi lahan kuburan/pemakaman",
    "file",
  ),
  createData(
    "Jenis / Rincian / Volume dan luasan PSU Rencana Penyerahan",
    "file",
  ),
];

export default function ItemDokumen() {
  // Fungsi untuk membuka PDF di tab baru
  const openPDFInNewTab = () => {
    window.open("/file/pdf.pdf", "_blank");
  };

  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 350, maxWidth: 500 }}
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
                <Card
                  sx={{
                    width: "fit-content",
                    height: 30,
                    display: "flex",
                    justifyContent: "left",
                    paddingX: 1,
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    color: "#000",
                    hover: {
                      backgroundColor: "#E0E0E0",
                      fontWeight: "bold",
                    },
                  }}
                  onClick={openPDFInNewTab}
                >
                  {row.file}
                </Card>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
