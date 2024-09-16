import Login from "./components/Login"
import AlbumCard from './components/AlbumCard'
import Nav from "./components/Nav"
import { useGetUserAlbumsQuery } from "./api/api";
import { useState, useEffect } from "react";



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
    {randomAlbum&&<AlbumCard randomAlbum={randomAlbum} reloadAlbums={reloadAlbums}></AlbumCard>}
    </>
  )
}

export default App