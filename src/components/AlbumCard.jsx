import React from 'react'
import { useGetUserAlbumsQuery } from '../api/api'

const AlbumCard = (accessToken) => {
    const albums = useGetUserAlbumsQuery()
  return (
    <div>

    </div>
  )
}

export default AlbumCard