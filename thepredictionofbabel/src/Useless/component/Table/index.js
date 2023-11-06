import { useState } from 'react';
import './index.css';

/*
const Row=()=>{
    return (
<tr>
    <td>0</td>
    <td>Hello             </td>
    <td>33             </td>
    <td>Male             </td>
    <td><button>Delete</button>     </td>
</tr>
    )
}

<button>Filter</button>
<button>Inspection</button>
<button>Rename</button>
<button>Replace</button>
<button>Plot X</button>
<button>Plot Y</button>
<button>Hide</button>
<button>Delete</button>*/

const Table = () => {
    const ColumnList=[
        'Mumu',
        'CheChe',
        'Tata'
    ]
    const ColumnHTML = ColumnList.map(Column => <th>{Column}</th>);
    const ColumnButton = ColumnList.map(Column=>
        <td>
            <div id='TableButton'>
            <button>Edit</button>
            </div>
        </td>
        );
    return (
<>
<table id='Table'>
<tr>
    {ColumnHTML}
    <th>Edit</th>
</tr>
<tr>
    {ColumnButton}
    <td>-</td>
</tr>

</table>
</>
    )
}

export default Table