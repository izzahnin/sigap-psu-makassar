import { Box, Typography } from "@mui/material";
import React from "react";

interface ItemDetailProps {
  // json
  data: any;
}

export const ItemDetail = (
  props: ItemDetailProps
) => {
  const { data } = props;

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        maxWidth: "500",
      }}
    >
      <div className="flex flex-col">
        <Typography variant="body1">Nama Perumahan</Typography>
        <Typography variant="body1">Nama Pengembang</Typography>
        <Typography variant="body1">Alamat/Telepon</Typography>
        <Typography variant="body1">Lokasi</Typography>
        <Typography variant="body1">Kelurahan</Typography>
        <Typography variant="body1">Kecamatan</Typography>
      </div>
      <div className="flex flex-col">
        <Typography variant="body1">:</Typography>
        <Typography variant="body1">:</Typography>
        <Typography variant="body1">:</Typography>
        <Typography variant="body1">:</Typography>
        <Typography variant="body1">:</Typography>
        <Typography variant="body1">:</Typography>
      </div>
      <div className="flex flex-col">
        <Typography variant="body1">{data['Nama Perumahan']}</Typography>
        <Typography variant="body1">{data['Nama Pengaju']}</Typography>
        <Typography variant="body1">{data['Alamat/Telepon']}</Typography>
        <Typography variant="body1">{data['Lokasi']}</Typography>
        <Typography variant="body1">{data['Kelurahan']}</Typography>
        <Typography variant="body1">{data['Kecamatan']}</Typography>
      </div>
    </Box>
  );
};
