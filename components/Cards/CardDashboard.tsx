import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';

interface ActionAreaCardProps {
  image: string;
  title: string;
  description: string;
  href?: string;
}

export default function ActionAreaCard(props: ActionAreaCardProps) {
  const { image, title, description, href } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={href} >
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
}
