import React from 'react';
import AppBar from '@mui/material/AppBar';
import SpeakerIcon from '@mui/icons-material/Speaker';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material//Toolbar';
import Typography from '@mui/material/Typography';
import MediaCard from '../MediaCard';
import type { Media } from '../../types';

type Props = {
  mediaCards: Media[];
};

function Album({ mediaCards }: Props) {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <SpeakerIcon />
          <Typography variant="h6" color="inherit" noWrap>
            Apple API Results
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          {/* End hero unit */}
          <Grid container spacing={10}>
            {mediaCards.map((card: Media) => (
              <Grid item key={card.toString()} sm={6} md={4} lg={3}>
                <MediaCard {...card} />
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </>
  );
}

export default Album;
