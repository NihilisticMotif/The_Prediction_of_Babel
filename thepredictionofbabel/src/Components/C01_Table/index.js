import { useState } from 'react';
import './index.css';

const C01_Table = () => {
    const ColumnList=[
        {Name:'Mumu'  , Gender:false, Age: 25},
        {Name:'CheChe', Gender: true, Age: 22},
        {Name:'Tata'  , Gender: true, Age: 19}
    ]


    const ColumnHTML = ColumnList.map(Column => <th>{Column.Name+','+Column.Gender.toString()+','+Column.Age.toString()}</th>);
    const ColumnButton = ColumnList.map(Column=>
        <td>
            <div id='C01id_Button'>
            <button>Edit</button>
            </div>
        </td>
        );
    return (
<>
<table id='C01id_Table'>
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

export default C01_Table