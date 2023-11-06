import { useState } from 'react';

const C_DefineColumn = (
//****************************************************************************
{
    key,
    Name
}) => 
{
//****************************************************************************
    const [SSColumn,setSSColumn]= useState(0)
    const [SSSelect,setSSSelect]= useState(false)

    function Rename(){
        setSSColumn(1)
    }

    function Select(){
        if (SSSelect){
            document.getElementById('C02id_CheckButton').style.backgroundColor = 'rgb(255,255,255)'
            setSSSelect(false)
        }
        else if (SSSelect===false){
            document.getElementById('C02id_CheckButton').style.backgroundColor = 'red'
            setSSSelect(true)
        }
        // https://react.dev/learn/responding-to-events#preventing-default-behavior
        // https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    }

    function Delete(){
        alert('Hello')
    }
    // HTML = representing in HTML
    let HTML_Column
    if (SSColumn===0){
        HTML_Column=
<>
<div key={key}>
<td><button class='C02id' onClick={Select} id='C02id_CheckButton'>X</button></td>
<td><button class='C02id' onClick={Rename}>Edit</button></td>
<td><button class='C02id' onClick={Delete}>Delete</button></td>
<td><h1 class='C02id'>{Name}</h1></td>
</div>
</>
    }else if (SSColumn===1){
        HTML_Column=<><h1>Abstract</h1></>
    }else if (SSColumn===2){
        HTML_Column=<><h1>Escape</h1></>
    }
    function Inspection(){alert('HelloWorld')}
//****************************************************************************
return (
<div class='C02id'>
{HTML_Column}
</div>
    )
}
//****************************************************************************
export default C_DefineColumn