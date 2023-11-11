import { useState , useEffect} from 'react';
// Update Select All Column
const U_UnSelect = (
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
        let ss_Column = [...SS_Column]
        for(let i=0;i<ss_Column.length;i++){
            ss_Column[i].IsSelect=false
        }
        setSS_Column(ss_Column)
        setSS_Reset(Math.random())
        setSS_SelectAll(false)
    }

    JSX_SelectButton=<td><button class='C02id' onClick={f_Select} id={C02id_CheckButton}>X</button></td>
//****************************************************************************
// OUTPUT
//****************************************************************************
    return (
<>
<div class='C02id'>
{JSX_SelectButton}
<td><h1 class='C02id'>Un Select</h1></td>
</div>
</>
)
}
//****************************************************************************
export default U_UnSelect