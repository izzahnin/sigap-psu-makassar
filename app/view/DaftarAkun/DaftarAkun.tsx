"use client";
import React, { useEffect, useMemo, useState } from "react";
import { MRT_ColumnDef } from "material-react-table";
import CustomTable from "@/components/CustomTable/CustomTable";
import { Button, Paper, TextField } from "@mui/material";
import { TitleTable } from "@/components/TitleTable/TitleTable";
import { db } from "@/app/firebase/config";
import bcrypt from "bcryptjs";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const DaftarAkun = () => {
  const [userAccounts, setUserAccounts] = useState<any[]>([]);
  const [username, setUsername] = useState("");
  const [nama, setNama] = useState("");
  const [perumahan, setPerumahan] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserAccounts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddAccount = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);

      const newAccount = {
        username,
        nama,
        perumahan,
        password: hashedPassword,
        role: "user",
      };

      const docRef = await addDoc(collection(db, "users"), newAccount);
      setUserAccounts([...userAccounts, { ...newAccount, id: docRef.id }]);

      // Reset form
      setUsername("");
      setNama("");
      setPerumahan("");
      setPassword("");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setUserAccounts((prevList) => prevList.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const COLUMNS: MRT_ColumnDef<any>[] = useMemo(
    () => [
      {
        accessorKey: "username",
        header: "Username",
      },
      {
        accessorKey: "nama",
        header: "Nama",
      },
      {
        accessorKey: "perumahan",
        header: "Perumahan",
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
    [],
  );

  return (
    <Paper>
      <TitleTable title="Daftar Dokumen" />
      <form onSubmit={handleAddAccount} className="flex flex-col">
        <section className="flex flex-col gap-2 p-4 sm:flex-row">
          <TextField
            id="outlined-username"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="outlined-nama"
            label="Nama"
            variant="outlined"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <TextField
            id="outlined-perumahan"
            label="Perumahan"
            variant="outlined"
            value={perumahan}
            onChange={(e) => setPerumahan(e.target.value)}
          />
          <TextField
            id="outlined-password"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginLeft: 2, marginBottom: 2, width: "fit-content" }}
        >
          Tambah Akun
        </Button>
      </form>
      <CustomTable data={userAccounts} columns={COLUMNS} />
    </Paper>
  );
};
