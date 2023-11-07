import { useState } from 'react';

// Define what is Column
const C_DefineColumn = (
//****************************************************************************
{
    Key,             // For some unknown reason, name key, result key = unidentify
    ColumnName,
    SS_Column,       // SS_Column Hook from ../index.js
    setSS_Column     // SS_Column Hook from ../index.js
}) => 
{
//****************************************************************************
    const [SS_ColumnName,setSS_ColumnName] = useState(ColumnName)
    const [SS_Display,setSS_Display]= useState(0)
    // SS_Display == 0 => Default JSX Column | f_Cancel     => setSS_Display(0) => Open Default JSX Column
    // SS_Display == 1 => Rename JSX Column  | f_OpenRename => setSS_Display(1) => Open Rename JSX Column 
    // SS_Display == 2 => Delete JSX Column  | f_OpenDelete => setSS_Display(2) => Open Delete JSX Column 

    const [SS_IsSelect,setSS_IsSelect]= useState(false)
    const C02id_CheckButton = 'C02id_CheckButton'+Key.toString()

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
    function f_Cancel(){
        setSS_Display(0)
    }

    function f_OpenRename(){
        setSS_Display(1)
    }

    function f_Rename(){
        let NewName = document.getElementById('C02id_Rename').value 
        setSS_ColumnName(NewName)
        setSS_Display(0)
    }

    function f_OpenDelete(){
        setSS_Display(2)
    }

    function f_Delete(){
        // https://youtu.be/XtS14dXwvwE?si=rYQOe_tJbxmSnDWE
        let list = [...SS_Column];
        //alert(Key)
        alert(list)
        list.splice(Key, 1);
        setSS_Column(list);
    }

    function f_OpenSetting(){
        alert(Key)
        // * [C]: Create Copy Column
        // * [R]: Filter Data
        // * [R]: Inspect Column
        // * [R]: Data Visualization with Filter Condition
        // * [U]: Transform Column
        // * [U]: Replace Data
        // * [U]: Delete Data with Filter Condition
    }

    // HTML = representing in HTML
    let JSX_Column

    // Default Column JSX
    if (SS_Display===0){
        JSX_Column=
<>
<div>
<td><button class='C02id' onClick={f_Select} id={C02id_CheckButton}>X</button></td>
<td><button class='C02id'                       >{Key}</button></td>
<td><button class='C02id' onClick={f_OpenRename}>Edit</button></td>
<td><button class='C02id' onClick={f_OpenDelete}>Delete</button></td>
<td><button class='C02id' onClick={f_OpenSetting}>Setting</button></td>
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
    function f_Inspection(){alert('HelloWorld')}
//****************************************************************************
return (
<div class='C02id' key={Key}>
{JSX_Column}
</div>
    )
}
//****************************************************************************
export default C_DefineColumn