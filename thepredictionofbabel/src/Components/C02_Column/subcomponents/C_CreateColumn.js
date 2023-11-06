const C_CreateColumn = (
//****************************************************************************
{
    SSColumn,
    setSSColumn
}) => 
{
//****************************************************************************
    function handleClick(){
        // https://stackoverflow.com/questions/31048953/what-are-these-three-dots-in-react-doing
        let NewColumn=document.getElementById('C02id_ColumnName').value;

        // If the name is not longer than 50, then Create new column
        //alert(NewColumn)
        //alert(SSColumnName)
        if(NewColumn.toString().length>0 && NewColumn.toString().length<50){
            setSSColumn([...SSColumn, {Name: NewColumn}]);
        }
    }
//****************************************************************************
    return (
<div class='C02id'>
<h1 class='C02id'>Add New Column:</h1>
<input class='C02id' id='C02id_ColumnName'></input>
<button class='C02id' onClick={handleClick}>OK</button>
</div>
)
}

//****************************************************************************
export default C_CreateColumn