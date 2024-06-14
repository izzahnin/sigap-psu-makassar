import { Box, Typography } from "@mui/material";
import React from "react";

interface ItemDetailProps {
  title: string;
  value: string;
}

export const ItemDetail = () => {
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
        <Typography variant="body1">Perumahan A</Typography>
        <Typography variant="body1">PT. A</Typography>
        <Typography variant="body1">Jl. A</Typography>
        <Typography variant="body1">Jl. A</Typography>
        <Typography variant="body1">A</Typography>
        <Typography variant="body1">A</Typography>
      </div>
    </Box>
  );
};
