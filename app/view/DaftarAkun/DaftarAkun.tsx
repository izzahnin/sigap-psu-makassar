"use client";
import React, { useEffect, useMemo, useState } from "react";
import { MRT_ColumnDef } from "material-react-table";
import CustomTable from "@/components/CustomTable/CustomTable";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, TextField } from "@mui/material";
import { TitleTable } from "@/components/TitleTable/TitleTable";
import { db } from "@/app/firebase/config";
import bcrypt from "bcryptjs";
import { uuid } from 'uuidv4';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

export const DaftarAkun = () => {
  const [userAccounts, setUserAccounts] = useState<any[]>([]);
  const [username, setUsername] = useState("");
  const [nama, setNama] = useState("");
  const [perumahan, setPerumahan] = useState("");
  const [password, setPassword] = useState("");
  const [roleDeveloper, setRoleDeveloper] = useState(true);
  const [openConfirmationDialog, setOpenConfirmationDialog] =
    useState(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState("");
  const [loadingDeleteUser, setLoadingDeleteUser] = useState(false);

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
      const newId = uuid();

      const newAccount = {
        id: newId,
        username,
        name: nama,
        residence: perumahan,
        password: hashedPassword,
        category: roleDeveloper ? "developer" : "citizen",
        createdAt: Date.now(),
      };


      const docRef = await setDoc(doc(db, "users", newId), newAccount);
      setUserAccounts([...userAccounts, { ...newAccount, id: newId }]);

      // Reset form
      setUsername("");
      setNama("");
      setPerumahan("");
      setPassword("");
      setRoleDeveloper(true);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const handleDelete = async (id: string) => {
    setSelectedDeleteId(id);
    setOpenConfirmationDialog(true);
  };

  const handleConfirmDelete = async () => {
    try {
      setLoadingDeleteUser(true);
      await deleteDoc(doc(db, "users", selectedDeleteId));
      setUserAccounts((prevList) => prevList.filter((item) => item.id !== selectedDeleteId));
      toast.success("Berhasil menghapus akun");
    } catch (error) {
      toast.error("Gagal menghapus akun");
    } finally {
      setOpenConfirmationDialog(false);
      setSelectedDeleteId("");
      setLoadingDeleteUser(false);
    }
  };

  const handleCancelDelete = () => {
    setOpenConfirmationDialog(false);
    setSelectedDeleteId("");
  };

  const COLUMNS: MRT_ColumnDef<any>[] = useMemo(
    () => [
      {
        accessorKey: "username",
        header: "Username",
      },
      {
        accessorKey: "name",
        header: "Nama",
      },
      {
        accessorKey: "residence",
        header: "Perumahan",
      },
      {
        accessorKey: "category",
        header: "Jenis Akun",
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
        {/* add radio button for role */}
        <section className="flex flex-col gap-4 p-4 sm:flex-row">
          <section className="flex gap-2">
            <input
              type="radio"
              id="role-developer"
              name="role"
              value="developer"
              checked={roleDeveloper}
              onChange={() => setRoleDeveloper(true)}
            />
            <label htmlFor="role-developer">Developer</label>
          </section>
          <section className="flex gap-2">
            <input
              type="radio"
              id="role-citizen"
              name="role"
              value="citizen"
              checked={!roleDeveloper}
              onChange={() => setRoleDeveloper(false)}
            />
            <label htmlFor="role-citizen">Warga</label>
          </section>
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
      <Dialog open={openConfirmationDialog} onClose={handleCancelDelete}>
        <DialogTitle>Submit Form PSU</DialogTitle>
        <DialogContent>
          <p>Apakah anda yakin ingin menghapus akun ini?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete}>Batal</Button>
          <Button onClick={handleConfirmDelete} disabled={loadingDeleteUser}>
            {loadingDeleteUser ? "Menghapus..." : "Hapus"}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};
