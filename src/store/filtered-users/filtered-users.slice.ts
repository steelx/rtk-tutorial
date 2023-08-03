import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { useAppSelector } from "../redux-hooks";
import { FilteredUsersState } from "./types";
import { usersApi } from "../../api/users.api";



const initialState: FilteredUsersState = {
    users: [],
    filterCriteria: {
    }
}

export const filteredUsersSlice = createSlice({
    name: 'filteredUsers',
    initialState,
    reducers: {
        setFilterCriteria: (state, action) => {
            console.log('action.payload', action.payload);
            state.filterCriteria = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            usersApi.endpoints.getUsers.matchFulfilled,
            (state, action) => {
                state.users = action.payload
            }
        )
    }
})

export const useFilteredUsersState = (): FilteredUsersState => 
    useAppSelector((state: RootState) => state.filteredUsers)

export const { setFilterCriteria } = filteredUsersSlice.actions
