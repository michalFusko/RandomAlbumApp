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
  console.log(randomAlbum.tracks.items[0].duration_ms)
  const albumLength = randomAlbum.tracks.items.length
  let albumDuriationMs = 0
  for(let i = 0; i < albumLength; i ++){
    albumDuriationMs += randomAlbum.tracks.items[i].duration_ms
  }
  console.log(albumDuriationMs)
  console.log(albumLength)
  const albumDuration = () => {
    const albumTime = new Date(albumDuriationMs - 3600000)
    console.log(albumTime.toTimeString().split(" "))
    return albumTime.toTimeString().split(" ")[0] 
    
  }
  console.log(albumDuration())

  return (
  
    <Card sx={{ minWidth: 275, textAlign: "center" }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 25 }}>
          Album details
        </Typography>
        <Typography sx={{}} variant="h6" component="div">
          Release Date: {randomAlbum.release_date} <br></br>
          Label: {randomAlbum.label} <br></br>
          Duration: {albumDuration()} <br></br>
          Number of tracks: {albumLength}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}