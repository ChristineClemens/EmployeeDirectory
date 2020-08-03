import React from 'react'

function TableRow( props ){
    return (
        <tr style={{fontFamily: 'Open Sans'}}>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.location}</td>
        </tr>
    )
}

export default TableRow