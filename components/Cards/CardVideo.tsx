import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

interface CardVideoProps {
  source: string;
}

const CardVideo: React.FC<CardVideoProps> = ({ source }) => {
  const videoId = `https://www.youtube.com/embed/${source}`;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="iframe"
        height="400"
        src={videoId}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Card>
  );
};

export default CardVideo;
