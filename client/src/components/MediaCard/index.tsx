import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { Media } from '../../types';

export default function MediaCard(props: Media) {
  const {
    artistName,
    /* artistViewUrl, */
    artworkUrl100,
    collectionName,
    trackName,
  } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={artworkUrl100}
        alt={`${artistName}-${trackName}-${collectionName}`}
      />
      <CardContent>
        <Typography variant="h4">{artistName}</Typography>
        <Typography variant="h6">{trackName}</Typography>
        <Typography variant="body1">{collectionName}</Typography>
      </CardContent>
    </Card>
  );
}
