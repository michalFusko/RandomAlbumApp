import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useGetUserAlbumsQuery } from '../api/api';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.😎' }}
  >
    •
  </Box>
);

export default function SeeMore() {

    
  return (
    <Card sx={{ minWidth: 275, textAlign: "center" }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 25 }}>
          Album details
        </Typography>
        <Typography sx={{}} variant="h6" component="div">
          Year of Release: HOUNO <br></br>
          Label: HOUNO <br></br>
          Duration: HOUNO  <br></br>
          Number of tracks: HOUNO
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}