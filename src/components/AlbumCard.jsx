
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faRotateRight } from '@fortawesome/free-solid-svg-icons';

export default function AlbumCard({randomAlbum, reloadAlbums}) {
  console.log("feromojepero")

  return (
    <Card sx={{ display: 'flex', flexDirection:"column", alignItems:"center", boxShadow:"0px 5px 25px #191414", width:"450px", margin:"10px 100px 0 0 " }}>
        <CardMedia
          component="img"
          sx={{ width:"450px", height:"450px",  }}
          image={randomAlbum.images[0].url}
          alt="Live from space album cover"
        />
      <Box sx={{ display: 'flex', flexDirection: 'column',width:"500px", alignItems:"center" }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{textAlign:"center"}}>
            {randomAlbum.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{textAlign:"center"}}>
          {randomAlbum.artists[0].name}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton onClick={reloadAlbums}  aria-label="play/pause">
          <FontAwesomeIcon icon={faRotateRight} style={{fontSize:"40px", padding:"0 30 0 30"}} />
          </IconButton>
          
        </Box>
      </Box>
    </Card>
  );
}