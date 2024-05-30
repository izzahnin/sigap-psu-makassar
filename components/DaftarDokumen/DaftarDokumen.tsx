"use client";
import React from "react";
import { MRT_ColumnDef } from "material-react-table";
import { useMemo, useState } from "react";
import CustomTable from "@/components/CustomTable/CustomTable";
import { Button, Paper, Typography } from "@mui/material";
import TitleTable from "../TitleTable/TitleTable";

export default function DaftarDokumen() {
  const MOCK_DATA = [
    {
      id: 1,
      nama_perumahan: "Perumahan 1",
      nama_pengaju: "PT. A",
      notelp: "08123456789",
      lokasi: "Jl. A",
      kelurahan: "Kel. A",
      kecamatan: "Kec. A",
    },
    {
      id: 2,
      nama_perumahan: "Perumahan 2",
      nama_pengaju: "Bapak B",
      notelp: "08123456789",
      lokasi: "Jl. B",
      kelurahan: "Kel. B",
      kecamatan: "Kec. B",
    },
    {
      id: 3,
      nama_perumahan: "Perumahan 3",
      nama_pengaju: "Bapak C",
      notelp: "08123456789",
      lokasi: "Jl. C",
      kelurahan: "Kel. C",
      kecamatan: "Kec. C",
    },
  ];

  const MOCK_COLUMNS: MRT_ColumnDef<any>[] = useMemo(
    () => [
      {
        accessorKey: "nama_perumahan",
        header: "Nama Perumahan",
      },
      {
        accessorFn: (row) => row.nama_pengaju,
        id: "nama_pengaju",
        header: "Nama Pengaju",
      },
      {
        accessorKey: "notelp",
        header: "No. Telp",
      },
      {
        accessorKey: "lokasi",
        header: "Lokasi",
      },
      {
        accessorKey: "kelurahan",
        header: "Kelurahan",
      },
      {
        accessorKey: "kecamatan",
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
            >
              Hapus
            </Button>
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <Paper>
      <TitleTable title="Daftar Dokumen " />
      <CustomTable data={MOCK_DATA} columns={MOCK_COLUMNS} columnPinning={["mrt-row-numbers"]}/>
    </Paper>
  );
}
