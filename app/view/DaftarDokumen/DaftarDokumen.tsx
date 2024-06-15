"use client";
import React, { useEffect, useState } from "react";
import { MRT_ColumnDef } from "material-react-table";
import { useMemo } from "react";
import CustomTable from "@/components/CustomTable/CustomTable";
import { Button, Paper } from "@mui/material";
import { TitleTable } from "@/components/TitleTable/TitleTable";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/config";

export const DaftarDokumen = () => {
  const [data, setData] = useState<any[]>([]); // State to hold Firestore data

  const columns: MRT_ColumnDef<any>[] = useMemo(
    () => [
      {
        accessorKey: "Nama Perumahan",
        header: "Nama Perumahan",
      },
      {
        accessorKey: "Nama Warga",
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
            >
              Hapus
            </Button>
          </div>
        ),
      },
    ],
    [],
  );

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
    </Paper>
  );
};
