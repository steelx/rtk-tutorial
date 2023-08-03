import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../store/filtered-users/types'
import { EmptyObject } from '@reduxjs/toolkit'

type QueryArgs = EmptyObject


export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], QueryArgs>({
            query: () => ({
                url: '/users'
            })
        })
    }),
})

export const { useGetUsersQuery } = usersApi
