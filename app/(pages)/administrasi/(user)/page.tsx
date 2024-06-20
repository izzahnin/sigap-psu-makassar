"use client";

import React, { useEffect } from "react";
import { PengajuanDokumen } from "@/app/view/PengajuanDokumen/PengajuanDokumen";

export default function Administrasi() {
  //* Pengajuan Dokumen menentukan ketika user adalah citizen maka menampilkan Form untuk Citizen
  //* jika developer makan menampilkan Form untuk Developer
  const [loading, setLoading] = React.useState(true);

  // var userCategory: string | null = "citizen";
  const [userCategory, setUserCategory] = React.useState<string | null>(null);

  useEffect(() => {
    setUserCategory(localStorage.getItem('userCategory'));
    console.log(userCategory);
    setLoading(false);
  }, []);



  return <PengajuanDokumen userType={userCategory!} />;
};
