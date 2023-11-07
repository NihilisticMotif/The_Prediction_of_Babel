import { useState } from 'react';

// Define what is Column
const C_DefineColumn = (
//****************************************************************************
{
    Index,           // Position of each column
    Key,             // For some unknown reason, name key, result key = unidentify
    ColumnName,      // Name of this Column
    SS_Column,       // from ../index.js, List of all Columns, use with: f_Delete
    setSS_Column,    // from ../index.js, List of all Columns, use with: f_Delete
    setSS_Reset      // from ../index.js, Reset Column Key and Index after f_Delete and Filter
    // https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs
}) => 
{
//****************************************************************************

    const [SS_ColumnName,setSS_ColumnName] = useState(ColumnName)
    
    // SS_ColumnName = Name of this Column
    const [SS_Display,setSS_Display]= useState(0)
    // SS_Display == 0 => Default JSX Column | f_Cancel     => setSS_Display(0) => Open Default JSX Column
    // SS_Display == 1 => Rename JSX Column  | f_OpenRename => setSS_Display(1) => Open Rename JSX Column 
    // SS_Display == 2 => Delete JSX Column  | f_OpenDelete => setSS_Display(2) => Open Delete JSX Column 

    const [SS_IsSelect,setSS_IsSelect]= useState(false)
    // IsSelect is used for Select only some Column in the Table
    const C02id_CheckButton = 'C02id_CheckButton'+Key.toString()
    // ID of State Button that represent if the Column is selected or not.

    function f_Select(){
    if (SS_IsSelect){
        document.getElementById(C02id_CheckButton).style.backgroundColor = 'rgb(255,255,255)'
        setSS_IsSelect(false)
    }
    else if (SS_IsSelect===false){
        document.getElementById(C02id_CheckButton).style.backgroundColor = 'red'
        setSS_IsSelect(true)
    }
    // https://react.dev/learn/responding-to-events#preventing-default-behavior
    // https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    }

    function f_Cancel(){setSS_Display(0)}

    function f_OpenRename(){setSS_Display(1)}
    function f_Rename(){
        let NewName = document.getElementById('C02id_Rename').value 
        // Check if the name is duplicate
        if(SS_Column.map(Column=>Column.Name).includes(NewName)===false){
            setSS_ColumnName(NewName)
            setSS_Display(0)
        }
    }

    function f_OpenDelete(){setSS_Display(2)}
    function f_Delete(){
        // https://youtu.be/XtS14dXwvwE?si=rYQOe_tJbxmSnDWE
        let list = [...SS_Column];
        list.splice(Index-1, 1);
        setSS_Reset(Math.random())
        setSS_Column(list);
    }

    function f_OpenSetting(){
        let list = [...SS_Column];
        //alert(JSON.stringify(list))
        alert(list.length)
        // https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string

        // * [C]: Create Copy Column
        // * [R]: Filter Data
        // * [R]: Inspect Column
        // * [R]: Data Visualization with Filter Condition
        // * [U]: Transform Column
        // * [U]: Replace Data
        // * [U]: Delete Data with Filter Condition
    }

    function f_Inspection(){
        alert(Index)
    }

    // HTML = representing in HTML
    let JSX_Column

    // Default Column JSX
    if (SS_Display===0){
        JSX_Column=
<>
<div>
<td><button class='C02id' onClick={f_Select} id={C02id_CheckButton}>X</button></td>
<td><button class='C02id' >Index = {Index}</button></td>
<td><button class='C02id' >Key = {Key}</button></td>
<td><button class='C02id' onClick={f_OpenRename}>Rename</button></td>
<td><button class='C02id' onClick={f_OpenDelete}>Delete</button></td>
<td><button class='C02id' onClick={f_OpenSetting}>Setting</button></td>
    {//<td><button class='C02id'                       >{Key}</button></td>
    }
    {//<td><button class='C02id' onClick={f_Inspection}>Name</button></td>
    }
<td><h1 class='C02id'>{SS_ColumnName}</h1></td>
</div>
</>
    // Rename Column JSX
    }else if (SS_Display===1){
        JSX_Column=
<>
<div>
<td><input class='C02id' id='C02id_Rename'></input></td>
<td><button class='C02id' onClick={f_Rename}>OK</button></td>
<td><button class='C02id' onClick={f_Cancel}>Cancel</button></td>
</div>
</>
    // Delete Column JSX
    }else if (SS_Display===2){
        JSX_Column=
<>
<div>
<td><h1 class='C02id'>Do you sure that you want to delete {SS_ColumnName}</h1></td>
<td><button class='C02id' onClick={f_Delete}>OK</button></td>
<td><button class='C02id' onClick={f_Cancel}>Cancel</button></td>
</div>
</>
    }
//****************************************************************************
return (
<div class='C02id' key={Key}>
{JSX_Column}
</div>
    )
}
//****************************************************************************
export default C_DefineColumn