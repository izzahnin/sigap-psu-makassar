"use client";
import DokumenDetail from "@/app/view/DokumenDetail/DokumenDetail";
import { useParams } from "next/navigation";
import React from "react";

export default function DokumenDetailPage() {
  const params = useParams<{ id: string}>()
  console.log(params.id);
  return (
    //* pada sisi Admin ketika melihat detail dokumen dari user
    //* jika userType developer makan menampilkan list dari dokumen yang diajukan oleh developer
    //* jika userType citizen makan menampilkan list dari dokumen yang diajukan oleh citizen
    
    <DokumenDetail
      // userType="developer"
      params={{
        id: params.id
      }}
    />
  );
};
