import { useState } from 'react';
import './index.css';
import R_SearchColumn from './subcomponents/R_SearchColumn';
import C_CreateColumn from './subcomponents/C_CreateColumn';
import C_DefineColumn from './subcomponents/C_DefineColumn';

const C02_Column = (
//****************************************************************************

) => {
//****************************************************************************
    const [SS_Reset, setSS_Reset] = useState(1);
    // https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs

    // SS_Column = Set State Column 
    // Property of Column
    // 0. Key
    // 1. ColumnName
    // 2. IsSelect
    const [SS_Column,setSS_Column]=useState([
        {Key:0,Name: 'Row Index'},
        ]);

    const [SS_Filter,setSS_Filter]=useState('');
    let FilterColumn = SS_Column.filter(Column=>
        Column.Name.includes(SS_Filter)
        // https://react.dev/learn/rendering-lists
    );

    const JSX_Column = FilterColumn.map(
        (Column,index) => 
            <div key={Column.Key}>
            <C_DefineColumn
                Index={index+1}
                Key={Column.Key} 
                ColumnName={Column.Name}
                SS_Column={FilterColumn}
                setSS_Column={setSS_Column}
                setSS_Reset={setSS_Reset}
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
<hr/>
<C_CreateColumn 
    SS_Column={SS_Column} 
    setSS_Column={setSS_Column}
/>
<hr/>
<R_SearchColumn 
    setSS_Filter={setSS_Filter} 
    setSS_Reset={setSS_Reset}
    SS_Column={SS_Column}
    setSS_Column={setSS_Column}
/>
<hr/>

<div key={SS_Reset}>
{JSX_Column}
</div>

<hr/>
</div>
</>
)
}
//****************************************************************************
export default C02_Column