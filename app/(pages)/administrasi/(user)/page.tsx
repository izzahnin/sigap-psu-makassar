import React from "react";
import { PengajuanDokumen } from "@/app/view/PengajuanDokumen/PengajuanDokumen";

export default function Administrasi() {
  //* Pengajuan Dokumen menentukan ketika user adalah citizen maka menampilkan Form untuk Citizen
  //* jika developer makan menampilkan Form untuk Developer

  return <PengajuanDokumen userType="citizen" />;
};
