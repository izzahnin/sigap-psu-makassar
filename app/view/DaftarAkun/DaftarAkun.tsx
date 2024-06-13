"use client";
import React from "react";
import { MRT_ColumnDef } from "material-react-table";
import { useMemo, useState } from "react";
import CustomTable from "@/components/CustomTable/CustomTable";
import { Button, Paper, Typography, TextField } from "@mui/material";
import CustomButton from "@/components/Buttons/CustomButton";
import TitleTable from "@/components/TitleTable/TitleTable";

export default function DaftarAkun() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const MOCK_DATA = [
    {
      id: 1,
      username: "sakfjeljfasd",
      perumahan: "Perumahan 1",
      nama: "Budi",
      password: "123456",
    },
    {
      id: 2,
      username: "sakfjeljfasd",
      perumahan: "Perumahan 2",
      nama: "Budi",
      password: "123456",
    },
  ];

  const MOCK_COLUMNS: MRT_ColumnDef<any>[] = useMemo(
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
        Cell: ({ cell }) => (
          <Button type="button" variant="contained" color="error" size="small">
            Hapus
          </Button>
        ),
      },
    ],
    [],
  );

  return (
    <Paper>
      <TitleTable title="Daftar Dokumen " />
      <CustomButton onClick={() => setIsOpenModal(true)} />
      <form action="" className="flex flex-col">
        <section className="flex flex-col gap-2 p-4 sm:flex-row">
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="Nama" variant="outlined" />
          <TextField id="outlined-basic" label="Perumahan" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </section>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginLeft: 2, marginBottom: 2, width: "fit-content" }}
        >
          Tambah Akun
        </Button>
      </form>
      <CustomTable data={MOCK_DATA} columns={MOCK_COLUMNS} />
    </Paper>
  );
}
