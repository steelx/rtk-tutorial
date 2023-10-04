import React from "react";
import { useFilteredUsers } from "./useFilteredUsers";

export const Users: React.FC = () => {
    const { users } = useFilteredUsers()

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
                        users.map((user) => (
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
