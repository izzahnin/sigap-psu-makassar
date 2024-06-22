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
  CircularProgress,
  Box,
} from "@mui/material";
import { AttachFile, Edit } from "@mui/icons-material";
import { db, storage } from "@/app/firebase/config"; // Import your Firebase config
import { doc, getDoc, setDoc } from "firebase/firestore"; // Firestore methods
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Storage methods
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  createData("Nama Pengaju", ""),
  createData("Alamat/Telepon", ""),
  createData("Lokasi", ""),
  createData("Kelurahan", ""),
  createData("Kecamatan", ""),
  createData("Luasan PSU Rencana Penyerahan", ""),
  createData("Surat Permohonan", ""),
  createData("KTP Direktur/Direktris", ""),
  createData("NPWP Perusahaan", ""),
  createData("Akta Pendirian", ""),
  createData("Surat Pernyataan kebenaran dokumen", ""),
  createData(
    "Surat Peryataan pengembangan Untuk Menyerahkan PSU (Pelepasan Hak)",
    "",
    true,
  ),
  createData("Site Plan awal/induk", ""),
  createData("Site Plan perubahan (bila ada)", ""),
  createData(
    "Peta Jaringan/Site plan diarsir beserta luasannya PSU Rencana Penyerahan",
    "",
    true,
  ),
  createData("Izin Lokasi dari BPN Kota Makassar", ""),
  createData("Akte Jual Beli dan Surat Kepemilikan Lahan (HGB Induk)", ""),
  createData("Rekomendai TPU/Sertifikat Kepemilikan lahan TPU", ""),
  createData("Rekomendasi Peruntukan lahan/Lokasi Pembangunan Perumahan", ""),
  createData("Sertifikat PSU / Pemecahan / Pelepasan Hak", ""),
  createData("Bukti pembayaran uang kompensasi lahan kuburan/pemakaman", ""),
];

export const ItemDokumenUser = () => {
  const [userId, setUserId] = React.useState<string | null>(null);
  const [userCategory, setUserCategory] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [disabledInputs, setDisabledInputs] = React.useState(false);
  const [formData, setFormData] = React.useState<FormDataItem[]>(
    rows.map((row) => ({ title: row.title, value: "", file: null })),
  );
  const [openConfirmationDialog, setOpenConfirmationDialog] =
    React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [loadingFetchDocument, setLoadingFetchDocument] = React.useState(true);
  const [document, setDocument] = React.useState<any>();

  React.useEffect(() => {
    const userId = localStorage.getItem("userId");
    const userCategory = localStorage.getItem("userCategory");
    setUserId(userId);
    setUserCategory(userCategory);
    const fetchDocument = async () => {
      try {
        const docRef = doc(db, "citizenDocuments", userId!);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDocument({ ...docSnap.data() });
          const data = { ...docSnap.data() };
          // change form data based on document data
          if (data != null) {
            const updatedFormData = await Promise.all(
              rows.map(async (row, index) => {
                const title = row.title;
                if (index <= 6) {
                  return {
                    title,
                    value: data[title] || "",
                    file: null,
                  };
                } else {
                  const fileUrl = data[title];
                  if (fileUrl) {
                    const fileRef = ref(storage, fileUrl);
                    const fileDownloadUrl = await getDownloadURL(fileRef);
                    const response = await fetch(fileDownloadUrl);
                    const blob = await response.blob();
                    const file = new File([blob], `${title}.pdf`, {
                      type: "application/pdf",
                    });
                    return {
                      title,
                      value: "",
                      file,
                    };
                  }
                  return {
                    title,
                    value: "",
                    file: null,
                  };
                }
              })
            );

            setDisabledInputs(true);
            setSubmitted(true);
            setFormData(updatedFormData);
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoadingFetchDocument(false);
      }
    };

    fetchDocument();
  }, []);

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
      (row, index) => {
        if (index <= 6) {
          return row.required && formData[index].value.length < 1;
        } else {
          return row.required && formData[index].file === null;
        }
      }
    );

    if (missingItems.length > 0) {
      toast.error("Silakan lengkapi semua item yang diperlukan sebelum melakukan submit.");
    } else {
      setOpenConfirmationDialog(true);
    }
  };

  const handleConfirmSubmission = async () => {
    setLoading(true);
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
      await setDoc(doc(db, "citizenDocuments", userId!), {
        ...dataToStore,
        id: userId!,
        user_type: userCategory!,
      });

      setSubmitted(true);
      setDisabledInputs(true);
      setOpenConfirmationDialog(false);
      toast.success("Form successfully submitted!");
    } catch (error) {
      console.error("Error submitting form: ", error);
      setErrorMessage("Terjadi kesalahan saat mengirim formulir.");
      toast.error("Error submitting form!");
    } finally {
      setLoading(false);
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

  if (loadingFetchDocument) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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
          <Button onClick={handleCancelSubmission} disabled={loading}>
            Batal
          </Button>
          <Button onClick={handleConfirmSubmission} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
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
      <ToastContainer />
    </React.Fragment>
  );
};

export default ItemDokumenUser;
