const R_SearchColumn = (
//****************************************************************************
{
    SS_Column,          // SS_Column Hook from ../index.js
    SS_Filter,    // SS_Filter Hook from ../index.js
    setSS_Filter  // SS_Filter Hook from ../index.js
}) => {
//****************************************************************************
    function f_Search(){
        //const Value=event.target.value;
        let Value = document.getElementById('C02id_SearchColumnName').value
        setSS_Filter(Value)
    }
//****************************************************************************
    return (
<div class='C02id'>
<h1 class='C02id'>Search:</h1>
<input class='C02id' id='C02id_SearchColumnName'></input>
<td><button class='C02id' onClick={f_Search}>OK</button></td>
</div>
)
}
//****************************************************************************
export default R_SearchColumn