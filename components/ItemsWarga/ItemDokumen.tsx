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
  createData("Surat Permohonan", ""),
  createData("KTP Warga", ""),
  createData("Surat Keterangan Tanggung Jawab Informasi", ""),
  createData("Berita Acara", ""),
  createData("Surat Pernyataan", ""),
];

interface ItemDokumenProps {
  data: any;
}

export const ItemDokumenCitizen = (
  props: ItemDokumenProps
) => {
  const { data } = props;

  // Fungsi untuk membuka PDF di tab baru
  const openPDFInNewTab = (title: string) => {
    window.open(data[title], "_blank");
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
                  onClick={() => openPDFInNewTab(row.title)}
                >
                  Buka
                </Card>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
