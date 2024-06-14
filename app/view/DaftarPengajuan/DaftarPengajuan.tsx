"use client";
import React, { useEffect, useState, useMemo } from "react";
import { MRT_ColumnDef } from "material-react-table";
import CustomTable from "@/components/CustomTable/CustomTable";
import { Button, Paper } from "@mui/material";
import getUserSignUpList from "@/app/firebase/admin/getUserSignUpList";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { TitleTable } from "@/components/TitleTable/TitleTable";
import { ConfirmDialog } from "@/components/ConfirmDialog/ConfirmDialog";


//TODO: @FrhnSpwli @mfshobur sign up user tambahkan input Nama Pengaju(nama pengembang/nama warga)

export interface UserSignUp {
  id: string;
  username: string;
  residence_name: string;
  id_card: string;
  file: string;
}

export const DaftarPengajuan = () => {
  const [userSignUpList, setUserSignUpList] = useState<UserSignUp[]>([]);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false); // State untuk mengontrol dialog konfirmasi
  const [deleteId, setDeleteId] = useState<string>(""); // State untuk menyimpan id yang akan dihapus

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserSignUpList();
        setUserSignUpList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "account_request", id));
      // Update state after deletion
      setUserSignUpList((prevList) =>
        prevList.filter((item) => item.id !== id),
      );
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleDeleteClick = (id: string) => {
    // Menampilkan dialog konfirmasi
    setConfirmDialogOpen(true);
    setDeleteId(id);
  };

  const handleConfirmDelete = async () => {
    // Menutup dialog konfirmasi
    setConfirmDialogOpen(false);
    // Melakukan penghapusan
    if (deleteId) {
      await handleDelete(deleteId);
    }
    // Reset deleteId
    setDeleteId("");
  };

  const handleCancelDelete = () => {
    // Menutup dialog konfirmasi dan reset deleteId
    setConfirmDialogOpen(false);
    setDeleteId("");
  };

  const COLUMNS: MRT_ColumnDef<UserSignUp>[] = useMemo(
    () => [
      {
        accessorKey: "username",
        header: "Nama",
      },
      {
        accessorKey: "residence_name",
        header: "Perumahan",
      },
      {
        accessorKey: "phoneNumber",
        header: "Nomor Telepon",
      },
      {
        accessorKey: "id_card",
        header: "File",
        Cell: ({ cell }) => (
          <a
            href={cell.getValue<string>()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Lihat KTP
          </a>
        ),
      },
      {
        accessorKey: "action",
        header: "Tindakan",
        Cell: ({ row }) => (
          <Button
            type="button"
            variant="contained"
            color="error"
            size="small"
            onClick={() => handleDeleteClick(row.original.id)} // Menggunakan handleDeleteClick untuk menampilkan dialog konfirmasi
          >
            Hapus
          </Button>
        ),
      },
    ],
    [],
  );

  return (
    <Paper>
      <TitleTable title="Daftar Pengajuan" />
      <CustomTable
        data={userSignUpList}
        columns={COLUMNS}
        columnPinning={["mrt-row-numbers"]}
      />

      {/* Memasukkan ConfirmDialog */}
      <ConfirmDialog
        open={confirmDialogOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </Paper>
  );
};
