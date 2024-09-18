import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PlayButton from './PlayButton';


export default function SeeMore({randomAlbum}) {
  console.log(randomAlbum)
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
  
    <Card sx={{ width:"400px",height:"500px",display:"flex", alignItems:"center",justifyContent:"center",textAlign:"center", boxShadow:"none"}}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.primary', fontSize:"40px",paddingBottom:"20px" }}>
          Album details:
        </Typography>
        <Typography sx={{fontSize:"25px",lineHeight:"50px"}} variant="h6" component="div">
          Duration: {albumDuration()} <br></br>
          Number of tracks: {albumLength} <br></br>
          Label: {randomAlbum.label} <br></br>
          Release Date: {randomAlbum.release_date} <br></br>
        </Typography>
        <PlayButton></PlayButton>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}