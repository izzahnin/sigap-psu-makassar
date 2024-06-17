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
import { db, storage } from "@/app/firebase/config"; // Import your Firebase config
import { collection, addDoc } from "firebase/firestore"; // Firestore methods
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"; // Storage methods

interface RowData {
  title: string;
  file: string;
  required: boolean;
}

interface FormDataItem {
  title: string;
  value: string;
  file: File | null;
  fileUrl?: string;
}

const createData = (
  title: string,
  file: string,
  required: boolean = false,
): RowData => {
  return { title, file, required };
};

const rows: RowData[] = [
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

export const ItemDokumenUserCitizen = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [disabledInputs, setDisabledInputs] = React.useState(false);
  const [formData, setFormData] = React.useState<FormDataItem[]>(
    rows.map((row) => ({ title: row.title, value: "", file: null })),
  );
  const [openConfirmationDialog, setOpenConfirmationDialog] =
    React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (
    index: number,
    value: string | File,
    type: "value" | "file",
  ) => {
    const newFormData = [...formData];
    newFormData[index] = { ...newFormData[index], [type]: value };
    setFormData(newFormData);
    setSubmitted(false);
  };

  const handleSubmission = () => {
    const missingItems = rows.filter(
      (row, index) =>
        row.required && !formData[index].value && !formData[index].file,
    );

    if (missingItems.length > 0) {
      setErrorMessage(
        "Silakan lengkapi semua item yang diperlukan sebelum melakukan submit.",
      );
    } else {
      setOpenConfirmationDialog(true);
    }
  };

  const handleConfirmSubmission = async () => {
    try {
      const fileUploadPromises = formData.map(async (item) => {
        if (item.file) {
          const fileRef = ref(
            storage,
            `documents/${item.title}/${item.file.name}`,
          );
          await uploadBytes(fileRef, item.file);
          const fileUrl = await getDownloadURL(fileRef);
          return { ...item, fileUrl };
        }
        return item;
      });

      const fileUrls = await Promise.all(fileUploadPromises);

      const dataToStore = fileUrls.reduce(
        (acc, item) => {
          acc[item.title] = item.value || item.fileUrl || "";
          return acc;
        },
        {} as { [key: string]: string },
      );

      await addDoc(collection(db, "citizenDocuments"), dataToStore);

      setSubmitted(true);
      setDisabledInputs(true);
      setOpenConfirmationDialog(false);
    } catch (error) {
      console.error("Error submitting form: ", error);
      setErrorMessage("Terjadi kesalahan saat mengirim formulir.");
    }
  };

  const handleCancelSubmission = () => {
    setOpenConfirmationDialog(false);
  };

  const handleEdit = () => {
    setSubmitted(false);
    setDisabledInputs(false);
    setErrorMessage("");
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
                      value={formData[index].value}
                      onChange={(e) =>
                        handleChange(index, e.target.value, "value")
                      }
                    />
                  ) : (
                    <React.Fragment>
                      <input
                        accept="application/pdf"
                        id={`file-upload-${index}`}
                        type="file"
                        style={{ display: "none" }}
                        onChange={(event) =>
                          handleChange(
                            index,
                            event.target.files ? event.target.files[0] : "",
                            "file",
                          )
                        }
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
                          {formData[index].file
                            ? formData[index].file?.name
                            : "Upload PDF"}
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
};
