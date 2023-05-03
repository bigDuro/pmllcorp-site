'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function LoanCard({image, name, description, href}) {
    const router = useRouter();
    return (
      <Card sx={{}}>
        <CardActionArea onClick={() => router.push(href)}>
          <CardMedia
            component="img"
            image={image.src.src}
            alt={image.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{textAlign: 'right', display:'block'}}>
          <Button size="small" color="primary" style={{textTransform: 'none'}} onClick={() => router.push(href)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }