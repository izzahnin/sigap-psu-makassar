import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CardVideoProps {
  source: string;
}

export default function CardVideo(props: CardVideoProps) {
  const { source } = props;
  const videoId = `https://www.youtube.com/embed/${source}`

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
}
