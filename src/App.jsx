import Login from "./components/Login"
import AlbumCard from './components/AlbumCard'
import Nav from "./components/Nav"
<<<<<<< HEAD
import SeeMore from './components/seeMore'
=======
import { useGetUserAlbumsQuery } from "./api/api";
import { useState, useEffect } from "react";

>>>>>>> e99013e5ed6d36078e3afca5ec1cd322922f7044


const App = () => {
  const [ offset, setOffset ] = useState(0);  // State to manage offset
  const { data : Albums, error, isLoading } = useGetUserAlbumsQuery({ limit: 50, offset });
  const [randomAlbum, setRandomAlbum] = useState(null); // State for random album
  
  
  
  const reloadAlbums = () => {
    console.log("jarofajcikaro")
    if (Albums && Albums.total) {
      const totalAlbums = Albums.total;
      
      // Update the offset based on total albums (if needed)
      if (totalAlbums > 50) {
        setOffset(Math.floor(Math.random()*Math.max(0, totalAlbums - 50)));
      }
    }
  }
  // Set random album once new albums data is loaded
  useEffect(() => {
    if (Albums) {
      const randomAlbum = Albums.items[Math.floor(Math.random() * Albums.items.length)].album;
      setRandomAlbum(randomAlbum); // Set random album after new data is loaded
    }
  }, [Albums]); // Runs only when Albums data changes
  
  if (error) return <p>Error loading albums.</p>;
  if (isLoading) return <p>loading...</p>;


  return (
    <>
    <Nav></Nav>
    <Login></Login>
<<<<<<< HEAD
    <AlbumCard></AlbumCard>
    <SeeMore></SeeMore>
=======
    {randomAlbum&&<AlbumCard randomAlbum={randomAlbum} reloadAlbums={reloadAlbums}></AlbumCard>}
>>>>>>> e99013e5ed6d36078e3afca5ec1cd322922f7044
    </>
  )
}

export default App