import { createSelector } from "@reduxjs/toolkit";
import { User } from "../store/filtered-users/types";
import { RootState } from "../store/store";
import { FilterCriteria, getFilterCriteriaSelector, getUsersSelector } from "../api/users.api";

export const selectUsersApi: (state: RootState) => User[] = createSelector(
    [getUsersSelector({})],
    ({ data }) => data ?? []
)

export const selectFilterCriteria: (state: RootState) => FilterCriteria = createSelector(
    [getFilterCriteriaSelector({})],
    ({ data }) => data ?? {}
)

export type SelectFilteredUsers = (state: RootState) => User[]

export const selectFilteredUsers: SelectFilteredUsers = createSelector(
    [selectUsersApi, selectFilterCriteria],
    (users, filterCriteria) => {
        // filter users based on filterCriteria
        return users
            .filter(user => filterCriteria.city ? user.city === filterCriteria.city : true)
            .filter(user => filterCriteria.country ? user.country === filterCriteria.country : true)
    }
)
