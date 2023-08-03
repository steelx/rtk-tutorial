import React from "react";
import { useGetFilterCriteriaQuery, useGetUsersQuery } from "../api/users.api";
import { selectFilteredUsers } from "./selectors";
import { useAppSelector } from "../store/redux-hooks";

export const Users: React.FC = () => {
    useGetUsersQuery({})
    useGetFilterCriteriaQuery({})
    
    const data = useAppSelector(selectFilteredUsers)

    

    return (
        <section>
            <h3>Users</h3>
            <table className="zigzag">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.city}</td>
                                <td>{user.country}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}
