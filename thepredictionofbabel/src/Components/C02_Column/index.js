import { useState , useEffect} from 'react';
import './index.css';
import R_FilterColumn from './subcomponents/R_FilterColumn';
import C_CreateColumn from './subcomponents/C_CreateColumn';
import C_DefineColumn from './subcomponents/C_DefineColumn';

const C02_Column = (
//****************************************************************************
// INPUT
//****************************************************************************
) => {
//****************************************************************************
// HOOK
//****************************************************************************
    // Reset Column List after Update Column List (Create, Rename, Delete, Filter and Sort)
    const [SS_Reset, setSS_Reset] = useState(1);
    // https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs

    // SS_Column = Set State Column List
    // Properties of Each Column
    // 0. Key        
    // 1. ColumnName
    // 2. IsSelect     // Is the Column display in C01_Table
    // 3. VisibleIndex     // Is the Column display in C02_Column
    const [SS_Column,setSS_Column]=useState([
        {Key: 0, Name: 'Row Index'            , IsSelect: false, VisibleIndex: true},
        {Key: 1, Name: 'Weezer'               , IsSelect: false, VisibleIndex: true},
        {Key: 2, Name: 'Tally Hall'           , IsSelect: false, VisibleIndex: true},
        {Key: 3, Name: 'Que, The Human Editor', IsSelect: false, VisibleIndex: true},
        {Key: 4, Name: 'Human Centipede'      , IsSelect: false, VisibleIndex: true},
        ]);
    
    // Every columns that satisfy 1 of 3 conditions, will appear in C02_Column
    // 1. Consist of SS_Filter in their name
    // 2. New Column
    // 3. Renamed Column

    // SS_Filter filter Column by Search Name
    const [SS_Filter,setSS_Filter]=useState('');

    // SS_FilterColumn is the list of visible column
    const [SS_FilterColumn,setSS_FilterColumn]=useState()

//****************************************************************************
// JSX_00: Filter SS_Column.Name by VisibleIndex=true
//****************************************************************************
    let let_Column=SS_Column
    let let_NewColumn=SS_FilterColumn
    // Filter Every Column except Filtered Column and New Column
    for(let i=0;i<let_Column.length;i++){
        if(let_Column[i].Name.includes(SS_Filter)===true){
            // select the column with match name
            let_Column[i].VisibleIndex=true
        }
        else{let_Column[i].VisibleIndex=undefined}
    }

    let let_FilterColumn = (SS_Column.filter(Column=>
        Column.VisibleIndex===true
        // https://react.dev/learn/rendering-lists
    ));
    
    useEffect(() => {
    //setSS_FilterColumn(let_FilterColumn)
    //alert(let_FilterColumn)
    }, []);

    let JSX_Column = let_FilterColumn.map(
        (Column,index) => 
            <div key={Column.Key}>
            <C_DefineColumn
                // Property
                Index={index+1}
                Key={Column.Key} 
                ColumnName={Column.Name}
                IsSelect={Column.IsSelect}
                VisibleIndex={Column.VisibleIndex}
                // Set State Hook
                setSS_Reset={setSS_Reset}
                SS_FilterColumn={SS_FilterColumn}
                setSS_FilterColumn={setSS_FilterColumn}
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
// OUTPUT
//****************************************************************************
    return (
<>
<div id='C02id_Div'>
<h3>SS_Column: {SS_Column.length}</h3>
<h3>SS_FilterColumn: {SS_FilterColumn}</h3>
<hr/>
{
// Create New Column in Column List
}
<C_CreateColumn 
    SS_FilterColumn={SS_FilterColumn}
    setSS_FilterColumn={setSS_FilterColumn}
    SS_Column={SS_Column} 
    setSS_Column={setSS_Column}
/>
<hr/>
{
// Filter and Sort Column List
}
<R_FilterColumn 
    setSS_Filter={setSS_Filter} 
    setSS_Reset={setSS_Reset}
    setSS_FilterColumn={setSS_FilterColumn}
    SS_Column={SS_Column}
    setSS_Column={setSS_Column}
/>
<hr/>
{
// JSX_Column = List of all visible column
// SS_Reset only reset {JSX_Column}
}
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