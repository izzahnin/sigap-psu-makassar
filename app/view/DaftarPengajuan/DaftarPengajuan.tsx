"use client";
import React, { useEffect, useState, useMemo } from "react";
import { MRT_ColumnDef } from "material-react-table";
import CustomTable from "@/components/CustomTable/CustomTable";
import { Button, Paper } from "@mui/material";
import getUserSignUpList from "@/app/firebase/admin/getUserSignUpList";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { TitleTable } from "@/components/TitleTable/TitleTable";

// Tentukan antarmuka untuk struktur data
export interface UserSignUp {
  id: string;
  username: string;
  residence_name: string;
  id_card: string;
  file: string;
}

export const DaftarPengajuan = () => {
  const [userSignUpList, setUserSignUpList] = useState<UserSignUp[]>([]);

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
      setUserSignUpList((prevList) => prevList.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
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
        accessorKey: "id_card",
        header: "File",
        Cell: ({ cell }) => (
          <a href={cell.getValue<string>()} target="_blank" rel="noopener noreferrer">
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
            onClick={() => handleDelete(row.original.id)}
          >
            Hapus
          </Button>
        ),
      },
    ],
    []
  );

  return (
    <Paper>
      <TitleTable title="Daftar Pengajuan" />
      <CustomTable
        data={userSignUpList}
        columns={COLUMNS}
        columnPinning={["mrt-row-numbers"]}
      />
    </Paper>
  );
};
