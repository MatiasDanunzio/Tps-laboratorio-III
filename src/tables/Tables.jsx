import React from 'react'
import { Table } from 'react-bootstrap'

const Tables = ({ netIncomes }) => {
    const average = netIncomes.reduce((total, x) => total + x.income, 0) / netIncomes.length;
    return (
        <>

            <Table bordered>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Ingreso</th>
                    </tr>
                </thead>
                {netIncomes.map((x, index) => (
                    <tbody key={index}>
                        <tr>
                            <td>{x.brand}</td>
                            <td>{x.income}</td>
                        </tr>
                    </tbody>
                ))}
            </Table>
            <p>Ingreso promedio de las 3 marcas: ${average.toFixed(2)}</p>
            


        </>
    )
    
}

export default Tables