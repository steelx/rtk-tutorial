import { useGetFilterCriteriaQuery, useGetUsersQuery } from "../api/users.api"
import { User } from "../store/filtered-users/types"
import { useAppSelector } from "../store/redux-hooks"
import { selectFilteredUsers } from "./selectors"

export const useFilteredUsers = (): { users: User[] } => {
    useGetUsersQuery({})
    useGetFilterCriteriaQuery({})
    
    const users = useAppSelector(selectFilteredUsers)

    return {
        users
    }
}
