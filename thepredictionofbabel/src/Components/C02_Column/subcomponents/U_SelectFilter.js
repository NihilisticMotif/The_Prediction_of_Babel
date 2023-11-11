import { useState , useEffect} from 'react';
// Update Select All Column
const U_SelectAllFilter = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // PROPERTY
    // HOOK: setState()
    SS_SelectAll,   // from ../index.js
    setSS_SelectAll,// from ../index.js
    SS_Column,      // from ../index.js, Sort Column
    setSS_Column,   // from ../index.js, Sort Column
    setSS_Reset      // from ../index.js, Reset after update Column
}) => {
//****************************************************************************
// HOOK
//****************************************************************************

//****************************************************************************
// FUNCTION_00: Select function that will appear in C01_Table with IsSelect 
//****************************************************************************
    let JSX_SelectButton
    const C02id_CheckButton = 'C02id_AllCheckButton'
    function f_Select(){
        // https://react.dev/learn/responding-to-events#preventing-default-behavior
        // https://www.w3schools.com/jsref/met_document_getelementbyid.asp
        if (SS_SelectAll===false){
            document.getElementById(C02id_CheckButton).style.backgroundColor = "red";
            let ss_Column = [...SS_Column]
            for(let i=0;i<ss_Column.length;i++){
                ss_Column[i].IsSelect=true
            }
            setSS_Column(ss_Column)
            setSS_Reset(Math.random())
            setSS_SelectAll(true)
        }
        else if (SS_SelectAll===true){
            document.getElementById(C02id_CheckButton).style.backgroundColor = "white";
            setSS_SelectAll(false)
        }
    }

    if(SS_SelectAll===true){
        JSX_SelectButton=<td><button class='C02id' onClick={f_Select} id={C02id_CheckButton} style={{backgroundColor: "red"}}>X</button></td>
    }
    else{
        JSX_SelectButton=<td><button class='C02id' onClick={f_Select} id={C02id_CheckButton} style={{backgroundColor: "white"}}>X</button></td>
    }
//****************************************************************************
// OUTPUT
//****************************************************************************
    return (
<>
<div class='C02id'>
{JSX_SelectButton}
<td><h1 class='C02id'>Select All</h1></td>
</div>
</>
)
}
//****************************************************************************
export default U_SelectAllFilter