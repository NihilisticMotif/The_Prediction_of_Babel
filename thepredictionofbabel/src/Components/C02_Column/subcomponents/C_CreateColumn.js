// Create New Column
const C_CreateColumn = (
//****************************************************************************
{
    SS_Column,       // SS_Column Hook from ../index.js
    setSS_Column     // SS_Column Hook from ../index.js
}) => 
{
//****************************************************************************
    function f_CreateColumn(){
        // https://stackoverflow.com/questions/31048953/what-are-these-three-dots-in-react-doing
        let NewColumn=document.getElementById('C02id_CreateNewColumn').value;
        // If the name is not longer than 50, then Create new column
        if(NewColumn.toString().length>0 && NewColumn.toString().length<50){
            setSS_Column([...SS_Column, {Name: NewColumn}]);
        }
    }
//****************************************************************************
    return (
<div class='C02id'>
<h1 class='C02id'>Add New Column:</h1>
<input class='C02id' id='C02id_CreateNewColumn'></input>
<button class='C02id' onClick={f_CreateColumn}>OK</button>
</div>
)
}

//****************************************************************************
export default C_CreateColumn