import React from "react";
import { Box, Typography } from "@mui/material";

interface TitleTableProps {
  title: string;
}

export default function TitleTable(props: TitleTableProps) {
  const { title } = props;

  return (
    <Box sx={{ 
      backgroundColor: "#2581D8",
      display: "flex",
      alignItems: "center",
      borderRadius: "4px 4px 0 0",
     }}>
      <Typography
        variant="h6"
        sx={{
          color: "white",
          padding: "4px",
          paddingLeft: "16px",
          fontWeight: "semiBold",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
