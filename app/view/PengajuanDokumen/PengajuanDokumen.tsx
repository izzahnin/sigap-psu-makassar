import React from 'react';
import ItemDokumenUser from '@/components/ItemsPengembang/ItemDokumenUser';
import ItemDokumenUserCitizen from '@/components/ItemsWarga/ItemDokumenUser';
import { Paper } from '@mui/material';
import TitleTable from '@/components/TitleTable/TitleTable';

interface PengajuanDokumenProps {
  userType: string;
}

export default function PengajuanDokumen(props: PengajuanDokumenProps) {
  const { userType } = props;
  return (
    <Paper>
      <TitleTable title="Form Pengajuan Penyerahan PSU" />
      {userType === 'developer' ? <ItemDokumenUser /> : <ItemDokumenUserCitizen />}
    </Paper>
  );
}
