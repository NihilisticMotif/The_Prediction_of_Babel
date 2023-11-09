import { useState } from 'react';

// Define what is Column
const C_DefineColumn = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // PROPERTY
    Index,           // Position of each Column in SS_Column
    Key,             // For some unknown reason, name key, result key = unidentify
    ColumnName,      // Name of this Column
    IsSelect,       // Is visible in C01_Table?
    VisibleIndex,       // Is visuble in C02_Column?
                        // If the column satisfy 1 of 3 conditions
                        // 1. Consist of SS_Filter in their name
                        // 2. New Column
                        // 3. Renamed Column
                        // Then it is visible in C02_Column and VisibleIndex=true

    // HOOK: setState()
    setSS_Reset,     // from ../index.js, f_Rename, f_Delete | Reset and Update Page
    // https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs
    SS_FilterColumn,    // from ../index.js, f_Rename           | List of NewColumn
    setSS_FilterColumn, // from ../index.js, f_Rename           | Update SS_FilterColumn
    SS_Column,       // from ../index.js, f_Rename, f_Delete | List of All Column that VisibleIndex=true
    setSS_Column,    // from ../index.js, f_Rename, f_Delete | Update SS_Column
}) => 
{

//****************************************************************************
// HOOK
//****************************************************************************
    // Selecting only some Columns in the C01_Table
    const [SS_IsSelect,setSS_IsSelect]= useState(IsSelect)
    // Set Mode of this component for Rename and/or Delete itself
    const [SS_Display,setSS_Display]= useState(0)

//****************************************************************************
// FUNCTION_00: Select function that will appear in C01_Table with IsSelect 
//****************************************************************************
    let JSX_SelectButton
    const C02id_CheckButton = 'C02id_CheckButton'+Key.toString()
    function f_Select(){
        // https://react.dev/learn/responding-to-events#preventing-default-behavior
        // https://www.w3schools.com/jsref/met_document_getelementbyid.asp
        if (SS_IsSelect===true){
            document.getElementById(C02id_CheckButton).style.backgroundColor = "red";
            setSS_IsSelect(false)
        }
        else if (SS_IsSelect===false){
            document.getElementById(C02id_CheckButton).style.backgroundColor = "white";
            setSS_IsSelect(true)}
    }
    if(SS_IsSelect===true){
        JSX_SelectButton=<td><button class='C02id' onClick={f_Select} id={C02id_CheckButton} style={{backgroundColor: "red"}}>{SS_IsSelect.toString()}</button></td>
    }
    else{
        JSX_SelectButton=<td><button class='C02id' onClick={f_Select} id={C02id_CheckButton} style={{backgroundColor: "white"}}>{SS_IsSelect.toString()}</button></td>
    }

//****************************************************************************
// FUNCTION_01: Change Mode of C_DefineColumn Components for Rename and Delete 
//****************************************************************************
// SS_Display == 0 => Default JSX Column | f_Cancel     => setSS_Display(0) => Open Default JSX Column
// SS_Display == 1 => Rename JSX Column  | f_OpenRename => setSS_Display(1) => Open Rename JSX Column 
// SS_Display == 2 => Delete JSX Column  | f_OpenDelete => setSS_Display(2) => Open Delete JSX Column 
    function f_Cancel(){setSS_Display(0)}
    const C02id_Rename = 'C02id_Rename'+Key.toString()
    function f_OpenRename(){setSS_Display(1)}
    function f_Rename(){
        let let_Name = document.getElementById(C02id_Rename).value 
        // Check if the name is duplicate
        if(SS_Column.map(Column=>Column.Name).includes(let_Name)===false){
            let let_Column = [...SS_Column];
            let let_NewColumn = [...SS_FilterColumn];
            // SS_FilterColumn
            alert(Index-1)
            let_Column.splice(Index-1, 1,{
                Key: Key,
                Name: let_Name, 
                IsSelect: SS_IsSelect,
                VisibleIndex: true
            });
            let_NewColumn.push(Key);
            setSS_Reset(Math.random())
            const UniqueNewColumn = [...new Set(let_NewColumn)];
            // https://stackoverflow.com/questions/11688692/how-to-create-a-list-of-unique-items-in-javascript
            setSS_FilterColumn(UniqueNewColumn);
            setSS_Column(let_Column);
        }
    }
    function f_OpenDelete(){setSS_Display(2)}
    function f_Delete(){
        // https://youtu.be/XtS14dXwvwE?si=rYQOe_tJbxmSnDWE
        let let_Column = [...SS_Column];
        let_Column.splice(Index-1, 1);
        setSS_Reset(Math.random())
        setSS_Column(let_Column);
    }
    // JSX = representing in JSX
    let JSX_Column
    // Default Column JSX
    if (SS_Display===0){
        JSX_Column=
<>
<div>
{JSX_SelectButton}
<td><button class='C02id' >Index = {Index}</button></td>
<td><button class='C02id' >Key = {Key}</button></td>
<td><button class='C02id' >VisibleIndex = {VisibleIndex.toString()}</button></td>
<td><button class='C02id' onClick={f_OpenRename}>Rename</button></td>
<td><button class='C02id' onClick={f_OpenDelete}>Delete</button></td>
<td><button class='C02id' onClick={f_OpenSetting}>Setting</button></td>
<td><h1 class='C02id'>{ColumnName}</h1></td>
</div>
</>
    // Rename Column JSX
    }else if (SS_Display===1){
        JSX_Column=
<>
<div>
<td><input class='C02id' id={C02id_Rename}></input></td>
<td><button class='C02id' onClick={f_Rename}>OK</button></td>
<td><button class='C02id' onClick={f_Cancel}>Cancel</button></td>
</div>
</>
    // Delete Column JSX
    }else if (SS_Display===2){
        JSX_Column=
<>
<div>
<td><h1 class='C02id'>Do you sure that you want to delete {ColumnName}</h1></td>
<td><button class='C02id' onClick={f_Delete}>OK</button></td>
<td><button class='C02id' onClick={f_Cancel}>Cancel</button></td>
</div>
</>
}

//****************************************************************************
// FUNCTION_02: Utility, Will Develop Later
//****************************************************************************
    function f_OpenSetting(){
        let let_Column = [...SS_Column];
        //alert(JSON.stringify(list))
        alert(let_Column.length)
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

//****************************************************************************
// OUTPUT
//****************************************************************************
return (
<div class='C02id' key={Key}>
{JSX_Column}
</div>
    )
}
//****************************************************************************
export default C_DefineColumn