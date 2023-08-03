import React from "react";
import { useFilteredUsersState } from "../store/filtered-users/filtered-users.slice";
import { useGetUsersQuery } from "../api/users.api";

export const Users: React.FC = () => {
    useGetUsersQuery({})
    const state = useFilteredUsersState()

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
                        state.users.map((user) => (
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
