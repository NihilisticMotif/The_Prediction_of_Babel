// Create New Column
const C_CreateColumn = (
//****************************************************************************
{
    SS_Column,       // from ../index.js, Update Columns
    setSS_Column,    // from ../index.js, Update Columns
    SS_NewColumn,    // from ../index.js, Allow New Column to appear
    setSS_NewColumn  // from ../index.js, Allow New Column to appear
}) => 
{
//****************************************************************************
    function f_CreateColumn(){
        // https://stackoverflow.com/questions/31048953/what-are-these-three-dots-in-react-doing
        let NewColumn=document.getElementById('C02id_CreateNewColumn').value.toString();
        // If the name is not longer than 50, then Create new column
        if(NewColumn.toString().length>0 
        && NewColumn.toString().length<50 
        && SS_Column.map(Column=>Column.Name).includes(NewColumn)===false){
            // https://stackoverflow.com/questions/43846531/check-if-dictionary-object-in-array-contains-certain-value-in-javascript
            //let list = [...SS_Column];
            let NewKey = Math.random()
            while(SS_Column.map(Column=>Column.Key).includes(NewKey)===true){
                NewKey = Math.random()
            }
            let let_NewColumnIndex=SS_NewColumn
            setSS_NewColumn(let_NewColumnIndex+1)
            setSS_Column([{
                Key: NewKey,    // Property of the column 
                Name: NewColumn, 
                IsViewC01:false,
                IsViewC02: true},
                ...SS_Column    // Other Columns
            ])
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