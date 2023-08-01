import React from "react";

export const Users: React.FC = () => {

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
                    <tr>
                        <td>John Doe</td>
                        <td>London</td>
                        <td>United Kingdom</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
