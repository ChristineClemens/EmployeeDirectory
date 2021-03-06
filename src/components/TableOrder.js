import React from 'react'

function TableOrder( props ){

    function changeOrder( event ){
        const { name, value }= event.target
        console.log( `[changeOrder] name(${name}) value(${value})`, event )

        props.updateOrder( value )
    }
    return (
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label" style={{fontFamily: 'Josefin Sans', color: 'rgba(134, 106, 25, 1)'}}>Filter</label>
            <div class="col-sm-10">
                <select onChange={changeOrder} value={props.order} class="form-select form-select-lg mb-3">
                    <option value='id'>ID</option>
                    <option value='name'>Name</option>
                    <option value='email'>Email</option>
                    <option value="location">Location</option>
                </select>
            </div>
        </div>
    )
}

export default TableOrder