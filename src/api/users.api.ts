import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../store/filtered-users/types'
import { EmptyObject } from '@reduxjs/toolkit'

type QueryArgs = EmptyObject

export type FilterCriteria = {
    city?: string
    country?: string
}

type FilterCriteriaArgs = FilterCriteria


export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], QueryArgs>({
            query: () => ({
                url: '/users'
            }),
        }),
        getFilterCriteria: builder.query<FilterCriteria, QueryArgs>({
            query: () => ({
                url: '/settings'
            })
        }),
        setFilterCriteria: builder.mutation<FilterCriteria, FilterCriteriaArgs>({
            query: (queryArgs) => ({
                url: '/settings',
                method: 'POST',
                body: queryArgs
            })
        })
    }),
})

export const { useGetUsersQuery, useSetFilterCriteriaMutation, useGetFilterCriteriaQuery } = usersApi

export const getUsersSelector = usersApi.endpoints.getUsers.select
export const getFilterCriteriaSelector = usersApi.endpoints.getFilterCriteria.select



