import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const imagesApi = createApi({
  reducerPath: 'imagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.giphy.com/v1/gifs/' }),
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: () => ({
          url: `trending`,
          params: {
              api_key: 'sFtwylYoLmzgPA4OMlKr61IJt42V81wB',
              limit: 20
          },
        }),
        transformResponse:(response)=>{
            return response.data
        }
    }),
    searchByName: builder.query({
        query: (query) => ({
            url: 'search',
            params: {
                api_key: 'sFtwylYoLmzgPA4OMlKr61IJt42V81wB',
                limit: 20,
                q: query
            },
            transformResponse:(response)=>{
              return response.data
          }
        }),
      }),
      searchById: builder.query({
        query: (id) => ({
            url: 'search',
            params: {
                api_key: 'sFtwylYoLmzgPA4OMlKr61IJt42V81wB',
                limit: 20,
                gif_id: id
            }
        }),
      })

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTrendingQuery, useSearchByNameQuery, useSearchByIdQuery } = imagesApi;
export default imagesApi;
