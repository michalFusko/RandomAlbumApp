import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.😎' }}
  >
    •
  </Box>
);

export default function SeeMore({randomAlbum}) {

  return (
  
    <Card sx={{ minWidth: 275, textAlign: "center" }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 25 }}>
          Album details
        </Typography>
        <Typography sx={{}} variant="h6" component="div">
          Release Date: {randomAlbum.release_date} <br></br>
          Label: {randomAlbum.label} <br></br>
          Duration: HOUNO <br></br>
          Number of tracks: {randomAlbum.tracks.items.length}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}