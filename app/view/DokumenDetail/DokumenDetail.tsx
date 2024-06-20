"use client";

import {
  Box,
  Breadcrumbs,
  CircularProgress,
  Divider,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import {TitleTable} from "@/components/TitleTable/TitleTable";
import {ItemDetail} from "@/components/ItemsPengembang/ItemDetail";
import {ItemDokumen} from "@/components/ItemsPengembang/ItemDokumen";
import {ItemDokumenCitizen} from "@/components/ItemsWarga/ItemDokumen";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";

export default function DokumenDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const [document, setDocument] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const docRef = doc(db, "citizenDocuments", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDocument({...docSnap.data()});
          console.log({...docSnap.data()});
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!document) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Typography variant="h6">Dokumen tidak ditemukan</Typography>
      </Box>
    );
  }

  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          marginBottom: 1,
        }}
      >
        <Link underline="hover" color="inherit" href="/administrasi/admin">
          Daftar Dokumen
        </Link>
        <Typography color="text.primary">Dokumen Perumahan {document['Nama Perumahan']}</Typography>
      </Breadcrumbs>
      <Paper
        sx={{
          marginBottom: 2,
        }}
      >
        <TitleTable title={`Detail Dokumen`} />
        <Box
          sx={{
            padding: 2,
          }}
        >
          <section>
            <ItemDetail data={document} />
          </section>
          <Divider sx={{ marginY: 2 }} />
          <section>
            <Typography
              variant="h6"
              sx={{
                marginY: 1,
                fontWeight: "bold",
              }}
            >
              Kelengkapan Dokumen
            </Typography>

            {document.userType === "developer" ? (
              <ItemDokumen data={document} />
            ) : (
              <ItemDokumenCitizen data={document} />
            )}
          </section>
        </Box>
      </Paper>
    </>
  );
}