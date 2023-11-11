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
    // 2. IsSelect          // Is the Column display in C01_Table
    // 3. VisibleIndex      // The index of visible column. 
                            // If the VisibleIndex is undefined,
                            // then the column is hidden.
    const [SS_Column,setSS_Column]=useState([
        {Key: 0, Name: 'Row Index'            , IsSelect: false, VisibleIndex: 0},
        {Key: 1, Name: 'Weezer'               , IsSelect: false, VisibleIndex: 1},
        {Key: 2, Name: 'Tally Hall'           , IsSelect: false, VisibleIndex: 2},
        {Key: 3, Name: 'Que, The Human Editor', IsSelect: false, VisibleIndex: 3},
        {Key: 4, Name: 'Human Centipede'      , IsSelect: false, VisibleIndex: 4},
        ]);
    
    // Every columns that satisfy 1 of 3 conditions,
    // VisibleIndex !== undefined and will appear in C02_Column
    // 1. Consist of SS_Filter in their name
    // 2. New Column
    // 3. Renamed Column

    // SS_Filter filter Column by Search Name
    const [SS_Filter,setSS_Filter]=useState('');

//****************************************************************************
// JSX_00: Filter SS_Column.Name by VisibleIndex=true
//****************************************************************************
    let ss_Column=[...SS_Column]

    // Filter Every Column except Column with match name (SS_Filter) and New Column
    // Automately update VisibleIndex
    let let_VisibleIndex=0
    for(let i=0;i<ss_Column.length;i++){
        if(ss_Column[i].Name.includes(SS_Filter)===true || ss_Column[i].VisibleIndex!==undefined){
            ss_Column[i].VisibleIndex=let_VisibleIndex
            let_VisibleIndex+=1
        }
        else{ss_Column[i].VisibleIndex=undefined}
    }
    let let_FilterColumn = (SS_Column.filter(Column=>
        Column.VisibleIndex!==undefined
        // https://react.dev/learn/rendering-lists
    ));

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
// JSX_01: Indicate the structure of let_FilterColumn and SS_Column
//****************************************************************************
    const Indicator = <>
<h1>Indicator</h1>
<h3>SS_Column Length: {SS_Column.length}</h3>
<h3>SS_Filter: {SS_Filter}</h3>
<h3>let_FilterColumn Type: {
    JSON.stringify(let_FilterColumn)
    // https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string
}</h3>
<h3>let_FilterColumn Length: {
    let_FilterColumn.length}</h3>
<h3>let_FilterColumn: {
    let_FilterColumn.constructor.toString()
    // https://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json
}</h3>
<hr/>
</>
//****************************************************************************
// OUTPUT
//****************************************************************************
    return (
<>
<div id='C02id_Div'>
{Indicator}
{
// Create New Column in Column List
}
<C_CreateColumn 
    SS_Column={SS_Column} 
    setSS_Column={setSS_Column}
    setSS_Reset={setSS_Reset}
/>
<hr/>
{
// Filter and Sort Column List
}
<R_FilterColumn 
    setSS_Filter={setSS_Filter} 
    setSS_Reset={setSS_Reset}
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