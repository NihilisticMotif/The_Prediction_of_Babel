import { useState } from 'react';
import './index.css';
import R_Column from './subcomponents/R_SearchColumn';
import C_CreateColumn from './subcomponents/C_CreateColumn';
import C_DefineColumn from './subcomponents/C_DefineColumn';
const C02_Column = (
//****************************************************************************

) => {
//****************************************************************************

    const [SSColumn,setSSColumn]=useState([{Name: 'Row Index'}]);
    const HTML_Column = SSColumn.map(
        (Column, index) => 
            <C_DefineColumn
                key={index+1} 
                Name={Column.Name}
            />);
    function text(){
        alert(SSColumn.toString())
    }
    // https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
    // https://youtu.be/XtS14dXwvwE?si=rYQOe_tJbxmSnDWE
    // https://react.dev/learn/rendering-lists#where-to-get-your-key
    // https://stackoverflow.com/questions/72217570/insert-counter-in-a-reactjs-map

//****************************************************************************
    return (
<>
<button onClick={text}>sss</button>
<div id='C02id_Div'>
<hr/>
<C_CreateColumn SSColumn={SSColumn} setSSColumn={setSSColumn}/>
<hr/>
<R_Column/>
<hr/>
{HTML_Column}
<hr/>
</div>
</>
)
}
//****************************************************************************
export default C02_Column