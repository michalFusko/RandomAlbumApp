import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { useGetUserAlbumsQuery } from '../api/api';

export default function AlbumCard() {
  const theme = useTheme();
   const { data : Albums }  = useGetUserAlbumsQuery()
  const randomToTwenty = Math.floor(Math.random()*Albums?.items.length)
  const randomAlbum = Albums?.items[randomToTwenty].album
  console.log(randomAlbum)


  return (
    <Card sx={{ display: 'flex', flexDirection:"column", alignItems:"center", boxShadow:"0px 5px 25px #191414", width:"500px", border:"1px solid #191414", margin:"auto" }}>
        <CardMedia
          component="img"
          sx={{ width:"500px", height:"500px", border:"10px solid #191414",  }}
          image={Albums?.items[randomToTwenty].album.images[0].url}
          alt="Live from space album cover"
        />
      <Box sx={{ display: 'flex', flexDirection: 'column',width:"500px", alignItems:"center" }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{textAlign:"center"}}>
            {Albums?.items[randomToTwenty].album.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{textAlign:"center"}}>
          {Albums?.items[randomToTwenty].album.artists[0].name}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
          <IconButton aria-label="play/pause">
          <FontAwesomeIcon icon={faRotateRight} style={{fontSize:"40px", padding:"0 30 0 30"}} />
          </IconButton>
          
        </Box>
      </Box>
    </Card>
  );
}