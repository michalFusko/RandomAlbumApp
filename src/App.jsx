import React from 'react'
import Login from "./components/Login"
import AlbumCard from './components/AlbumCard'
import Nav from "./components/Nav"
import SeeMore from './components/seeMore'


const App = () => {

  return (
    <>
    <Nav></Nav>
    <Login></Login>
    <AlbumCard></AlbumCard>
    <SeeMore></SeeMore>
    </>
  )
}

export default App