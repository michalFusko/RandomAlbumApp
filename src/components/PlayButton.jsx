import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PlayButton = ({randomAlbum}) => {
  const albumLink = `https://open.spotify.com/album/${randomAlbum.id}`
  return (
    <a href={albumLink} target='_blank' style={{ textDecoration: "none"}}>
      <div style={{display: "inline-block",position: "relative",width: "100px",height: "100px",marginTop:"100px"}}>
        <FontAwesomeIcon icon={faCirclePlay} style={{color: "#1DB954",fontSize: "100px",position: "relative",zIndex: 2,}}/>
        <div style={{position: "absolute",top: "0",left: "0",width: "100%",height: "100%",backgroundColor: "#191414",borderRadius: "50%",zIndex: 1,}}></div>
        </div>
    </a>
  );
};

export default PlayButton;