import React, {useState} from 'react';
import TableFilter from './components/TableFilter';
import TableOrder from './components/TableOrder';
import TableList from './components/TableList';
import employees from './employees.json'

function App () {
    const [ tableManager, setList ]= useState( { list: employees, filter: '', order: 'id' } )
    console.log( `[App] tableManager:`, tableManager )

    function updateFilter( filter ){
      console.log( `employees: `, employees )
      const filterList = employees.filter( employee => employee.name.toLowerCase().indexOf( filter.toLowerCase() )>-1 )
      setList( { ...tableManager, filter, list: filterList })
    }

    function updateOrder( order ){
      const newOrderForList = tableManager.list.sort(function(a, b) {
        return a[order] > b[order] ? 1 : -1;
      })
      setList( { ...tableManager, order, list: newOrderForList })
    }

    return(
        <div className="container">
            <div className="row d-flex justify-content-center container">
                <div className = "jumbotron jumbotron-fluid" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '30px', boxShadow: '10px 10px 5px rgb(173, 169, 158)'}}>
                <br />
                <h1 style={{fontFamily: 'Josefin Sans', color: 'rgba(185, 147, 34, 1)', textShadow: '2px 2px 4px #000000'}}>Employee Directory</h1>
                <br />
                <form>
                    <TableFilter filter={tableManager.filter} updateFilter={updateFilter} />
                    <TableOrder order={tableManager.order} updateOrder={updateOrder} />
                </form>
                </div>
                <TableList employees={tableManager.list} />
            </div>
        </div>
    )
}

export default App;
