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
    // 2. IsViewC01     // Is the Column display in C01_Table
    // 3. IsViewC02     // Is the Column display in C02_Column
    const [SS_Column,setSS_Column]=useState([
        {Key:0,Name: 'Row Index'            , IsViewC01: false, IsViewC02: true},
        {Key:1,Name: 'Weezer'               , IsViewC01: false, IsViewC02: true},
        {Key:2,Name: 'Tally Hall'           , IsViewC01: false, IsViewC02: true},
        {Key:3,Name: 'Que, The Human Editor', IsViewC01: false, IsViewC02: true},
        {Key:4,Name: 'Human Centipy'        , IsViewC01: false, IsViewC02: true},
        ]);
    const [SS_NewColumn,setSS_NewColumn]=useState(0)
    const [SS_Filter,setSS_Filter]=useState('');
    let let_Column=[...SS_Column]
    for(let i=0;i<let_Column.length;i++){
        if(let_Column[i].Name.includes(SS_Filter)===true || i<SS_NewColumn){
            let_Column[i].IsViewC02=true
        }else{let_Column[i].IsViewC02=false}
    }
    // Filter Every Column except Searched Column and New Column
    let FilterColumn = SS_Column.filter(Column=>
        Column.IsViewC02===true
        // https://react.dev/learn/rendering-lists
    );
    /*
    for(let i=0;i<SS_Column.length;i++){
        if(i<SS_NewColumn || SS_Column[i].Name.includes(SS_Filter)){
            FilterColumn.push(SS_Column[i])
        }
    }
    let FilterColumn = SS_Column.filter(Column=>
        Column.Name.includes(SS_Filter)
        // https://react.dev/learn/rendering-lists
    );
    */

    const JSX_Column = FilterColumn.map(
        (Column,index) => 
            <div key={Column.Key}>
            <C_DefineColumn
                // Property
                Index={index+1}
                Key={Column.Key} 
                ColumnName={Column.Name}
                IsViewC01={Column.IsViewC01}
                IsViewC02={Column.IsViewC02}
                // Set State Hook
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
    SS_NewColumn={SS_NewColumn}
    setSS_NewColumn={setSS_NewColumn}
/>
<hr/>
<R_SearchColumn 
    setSS_Filter={setSS_Filter} 
    setSS_Reset={setSS_Reset}
    SS_Column={SS_Column}
    setSS_Column={setSS_Column}
    setSS_NewColumn={setSS_NewColumn}

/>
<hr/>

<div key={SS_Reset}>
{
//SS_Reset only reset {JSX_Column}
}
{JSX_Column}
</div>

<hr/>
</div>
</>
)
}
//****************************************************************************
export default C02_Column