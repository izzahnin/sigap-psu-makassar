"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { AttachFile, Edit } from "@mui/icons-material";

function createData(title: string, file: string, required: boolean = false) {
  return { title, file, required };
}

const rows = [
  createData("Nama Perumahan", ""),
  createData("Nama Warga", ""),
  createData("Alamat/Telepon", ""),
  createData("Lokasi", ""),
  createData("Kelurahan", ""),
  createData("Kecamatan", ""),
  createData("Luasan PSU Rencana Penyerahan", ""),
  createData("Surat Permohonan", ""),
  createData("KTP Warga", ""),
  createData("Surat Keterangan Tanggung Jawab Informasi", ""),
  createData("Berita Acara", ""),
  createData("Surat Pernyataan", ""),
];

export default function ItemDokumenUserCitizen() {
  const [submitted, setSubmitted] = React.useState(false);
  const [disabledInputs, setDisabledInputs] = React.useState(false);
  const [fileNames, setFileNames] = React.useState(Array(rows.length).fill(""));
  const [openConfirmationDialog, setOpenConfirmationDialog] =
    React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleFileChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const newFileNames = [...fileNames];
      newFileNames[index] = file.name;
      setFileNames(newFileNames);
      setSubmitted(false); // Reset the submission status if a file is uploaded
    }
  };

  const handleSubmission = () => {
    // Check if all required fields and files are filled
    const missingItems = rows.filter(
      (row) =>
        row.required &&
        ((row.file && !fileNames[row.title as keyof typeof fileNames]) ||
          (!row.file && !row.title)),
    );

    if (missingItems.length > 0) {
      // Display error message
      setErrorMessage(
        "Silakan lengkapi semua item yang diperlukan sebelum melakukan submit.",
      );
    } else {
      // If all required fields and files are filled, proceed with submission
      setOpenConfirmationDialog(true);
    }
  };

  const handleConfirmSubmission = () => {
    // Handle form submission logic
    console.log("Form submitted!");
    setSubmitted(true);
    setDisabledInputs(true);
    setOpenConfirmationDialog(false);
  };

  const handleCancelSubmission = () => {
    setOpenConfirmationDialog(false);
  };

  const handleEdit = () => {
    setSubmitted(false);
    setDisabledInputs(false);
    setErrorMessage(""); // Clear error message
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dokumen</TableCell>
              <TableCell>Upload</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.title}>
                <TableCell component="th" scope="row">
                  {row.title}
                  {row.required && <span style={{ color: "red" }}> *</span>}
                </TableCell>
                <TableCell>
                  {index <= 6 ? (
                    <TextField
                      size="small"
                      variant="outlined"
                      fullWidth
                      label={row.title}
                      required={row.required}
                      disabled={submitted || disabledInputs}
                    />
                  ) : (
                    <React.Fragment>
                      <input
                        accept="application/pdf"
                        id={`file-upload-${index}`}
                        type="file"
                        style={{ display: "none" }}
                        onChange={(event) => handleFileChange(index, event)}
                        required={row.required}
                        disabled={submitted || disabledInputs}
                      />
                      <label htmlFor={`file-upload-${index}`}>
                        <Button
                          variant="outlined"
                          component="span"
                          startIcon={<AttachFile />}
                          disabled={submitted || disabledInputs}
                        >
                          {fileNames[index] || "Upload PDF"}
                        </Button>
                      </label>
                    </React.Fragment>
                  )}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell align="right" colSpan={2}>
                {submitted ? (
                  <Button
                    variant="outlined"
                    startIcon={<Edit />}
                    onClick={handleEdit}
                  >
                    Edit
                  </Button>
                ) : (
                  <Button variant="contained" onClick={handleSubmission}>
                    Submit
                  </Button>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openConfirmationDialog} onClose={handleCancelSubmission}>
        <DialogTitle>Submit Form PSU</DialogTitle>
        <DialogContent>
          <p>Apakah anda yakin ingin submit form ini?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelSubmission}>Batal</Button>
          <Button onClick={handleConfirmSubmission}>Submit</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={errorMessage !== ""} onClose={() => setErrorMessage("")}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <p>{errorMessage}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setErrorMessage("")}>OK</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
