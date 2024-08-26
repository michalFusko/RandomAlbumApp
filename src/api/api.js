import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const getToken = () => {
    const stringSplit = window.location.hash.split("=")
    const accessToken = stringSplit[1].split("&")
  return accessToken  
}


export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spotify.com/v1/me", headers: {Authorization: `Bearer ${getToken()}`}}),
  endpoints: (builder) => ({
    getUserAlbums: builder.query({
      query: () => `albums`,
      
    }),
    
    
  }),
});

export const { useGetUserAlbumsQuery } = Api;