import React from 'react'

function DataTable({ title, data, text, number }) {
    return (
        <div style={{margin: "20px"}}>
            <h2>{title}</h2>
            <p>{text}</p>
            <p>Number: {number}</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Brand</th>
                        <th>Model</th>
                    </tr>
                </thead>
                <tbody >
                    {data.map(car => (
                        <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable