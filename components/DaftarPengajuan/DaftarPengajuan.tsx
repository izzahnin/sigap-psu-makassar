"use client";
import React from "react";
import { MRT_ColumnDef } from "material-react-table";
import { useMemo, useState } from "react";
import CustomTable from "@/components/CustomTable/CustomTable";
import { Button, Paper, Typography, TextField } from "@mui/material";

export default function DaftarPengajuan() {
  const MOCK_DATA = [
    {
      id: 1,
      perumahan: "Perumahan 1",
      nama: "Budi",
      file: "file.pdf",
    },
    {
      id: 2,
      perumahan: "Perumahan 2",
      nama: "Budi",
      password: "123456",
      file: "file.pdf",
    },
  ];

  const MOCK_COLUMNS: MRT_ColumnDef<any>[] = useMemo(
    () => [
      {
        accessorKey: "nama",
        header: "Nama",
      },
      {
        accessorKey: "perumahan",
        header: "Perumahan",
      },
      {
        accessorKey: "file",
        header: "File",
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
      <Typography
        variant="h5"
        sx={{
          marginBottom: 2,
          fontWeight: "bold",
          paddingLeft: 2,
        }}
      >
        Daftar Pengajuan
      </Typography>
      <CustomTable data={MOCK_DATA} columns={MOCK_COLUMNS} />
    </Paper>
  );
}
