"use client";

import React, { useEffect } from "react";
import { PengajuanDokumen } from "@/app/view/PengajuanDokumen/PengajuanDokumen";

export default function Administrasi() {
  //* Pengajuan Dokumen menentukan ketika user adalah citizen maka menampilkan Form untuk Citizen
  //* jika developer makan menampilkan Form untuk Developer
  var userCategory: string | null = "citizen";
  useEffect(() => {
    userCategory = localStorage.getItem('userCategory');
  }, []);

  return <PengajuanDokumen userType={userCategory!} />;
};
