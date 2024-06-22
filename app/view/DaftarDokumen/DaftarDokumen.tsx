"use client";
import React, { useEffect, useState } from "react";
import { MRT_ColumnDef } from "material-react-table";
import { useMemo } from "react";
import CustomTable from "@/components/CustomTable/CustomTable";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper } from "@mui/material";
import { TitleTable } from "@/components/TitleTable/TitleTable";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { toast } from "react-toastify";

export const DaftarDokumen = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const columns: MRT_ColumnDef<any>[] = useMemo(
    () => [
      {
        accessorKey: "Nama Perumahan",
        header: "Nama Perumahan",
      },
      {
        accessorKey: "Nama Pengaju",
        header: "Nama Pengaju",
      },
      {
        accessorKey: "Alamat/Telepon",
        header: "No. Telp",
      },
      {
        accessorKey: "Lokasi",
        header: "Lokasi",
      },
      {
        accessorKey: "Kelurahan",
        header: "Kelurahan",
      },
      {
        accessorKey: "Kecamatan",
        header: "Kecamatan",
      },
      {
        accessorKey: "action",
        header: "Tindakan",
        Cell: ({ cell }) => (
          <div className="flex gap-1">
            <Button
              href={`/administrasi/admin/${cell.row.original.id}`}
              type=""
              variant="outlined"
              size="small"
            >
              Detail
            </Button>
            <Button
              type="button"
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleDelete(cell.row.original.id)}
            >
              Hapus
            </Button>
          </div>
        ),
      },
    ],
    [],
  );

  const handleDelete = (id: string) => {
    setOpenConfirmationDialog(true);
    setDeleteId(id);
  }

  const handleConfirmDelete = async () => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, "citizenDocuments", deleteId));
      // Update state after deletion
      setData((prevData) => prevData.filter((item) => item.id !== deleteId));
      toast.success("Dokumen dihapus");
    } catch (error) {
      console.error("Error deleting document:", error);
      toast.error("Gagal menghapus dokumen");
    } finally {
      setOpenConfirmationDialog(false);
      setDeleteId("");
      setLoading(false);
    }
  }

  const handleCancelDelete = () => {
    setOpenConfirmationDialog(false);
    setDeleteId("");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "citizenDocuments"));
        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Paper>
      <TitleTable title="Daftar Dokumen " />
      <CustomTable
        data={data}
        columns={columns}
        columnPinning={["mrt-row-numbers"]}
      />
      <Dialog open={openConfirmationDialog} onClose={handleCancelDelete}>
        <DialogTitle>Submit Form PSU</DialogTitle>
        <DialogContent>
          <p>Apakah anda yakin ingin menghapus akun ini?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete}>Batal</Button>
          <Button onClick={handleConfirmDelete} disabled={loading}>
            {loading ? "Menghapus..." : "Hapus"}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};
