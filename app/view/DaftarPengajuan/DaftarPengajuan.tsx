"use client";
import React, { useEffect } from "react";
import { MRT_ColumnDef } from "material-react-table";
import { useMemo, useState } from "react";
import CustomTable from "@/components/CustomTable/CustomTable";
import { Button, Paper, Typography, TextField } from "@mui/material";
import getUserSignUpList from "@/app/firebase/admin/getUserSignUpList";
import { TitleTable } from "@/components/TitleTable/TitleTable";

export const DaftarPengajuan = () => {
  const [userSignUpList, setUserSignUpListp] = useState([]);

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

  // useEffect(() => {
  //   async function fetchData= () => {
  //     try {
  //       const data = await getUserSignUpList();
  //       setUserSignUpList(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <Paper>
      <TitleTable title="Daftar Pengajuan " />
      <CustomTable
        data={userSignUpList}
        columns={MOCK_COLUMNS}
        columnPinning={["mrt-row-numbers"]}
      />
    </Paper>
  );
};
