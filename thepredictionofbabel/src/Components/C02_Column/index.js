import { useState } from 'react';
import './index.css';
import R_SearchColumn from './subcomponents/R_SearchColumn';
import C_CreateColumn from './subcomponents/C_CreateColumn';
import C_DefineColumn from './subcomponents/C_DefineColumn';
const C02_Column = (
//****************************************************************************

) => {
//****************************************************************************
    // SS_Column = Set State Column 
    // Property of Column
    // 0. key
    // 1. ColumnName
    // 2. IsSelect
    const [SS_Column,setSS_Column]=useState([
        {Name: 'Row Index'},
        {Name: 'A0'       },
        {Name: 'A1'       },
        {Name: 'B0'       },
        {Name: 'B1'       },
        ]);
    const [SS_Filter,setSS_Filter]=useState('');
    //const [SS_FilterColumn,setSS_FilterColumn]=useState(
    //    SS_Column.filter((Column)=>Column.Name.includes(SS_Filter))
    //)

    const JSX_Column = SS_Column.map(
        (Column, index) => 
            <div key={index+1}>
            <C_DefineColumn
                Key={index+1} 
                ColumnName={Column.Name}
                SS_Column={SS_Column}
                setSS_Column={setSS_Column}
            />
            </div>
            );
    // https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
    // https://youtu.be/XtS14dXwvwE?si=rYQOe_tJbxmSnDWE
    // https://react.dev/learn/rendering-lists#where-to-get-your-key
    // https://stackoverflow.com/questions/72217570/insert-counter-in-a-reactjs-map

//****************************************************************************
    return (
<>
<div id='C02id_Div'>
<h1>{SS_Filter}</h1>
<hr/>
<C_CreateColumn SS_Column={SS_Column} setSS_Column={setSS_Column}/>
<hr/>
<R_SearchColumn SS_Filter={SS_Filter} setSS_Filter={setSS_Filter}/>
<hr/>
{JSX_Column}
<hr/>
</div>
</>
)
}
//****************************************************************************
export default C02_Column