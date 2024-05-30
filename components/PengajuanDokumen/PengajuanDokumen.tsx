import React from 'react'
import ItemDokumenUser from '@/components/ItemsPengembang/ItemDokumenUser'
import { Paper } from '@mui/material'
import TitleTable from '@/components/TitleTable/TitleTable'

export default function PengajuanDokumen() {
  return (
    <Paper>
    <TitleTable title="Form Pengajuan Penyerahan PSU" />
    <ItemDokumenUser  />
  </Paper>
  )
}
