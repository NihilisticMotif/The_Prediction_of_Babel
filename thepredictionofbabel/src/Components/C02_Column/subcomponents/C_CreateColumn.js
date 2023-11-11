// Create New Column
const C_CreateColumn = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // HOOK: setState()
    SS_Column,       // from ../index.js, Update Columns
    setSS_Column,    // from ../index.js, Update Columns
    setSS_Reset      // from ../index.js, Reset after update Column
}) => 
{
//****************************************************************************
// FUNCTION_00:
//****************************************************************************
    function f_CreateColumn(){
        // https://stackoverflow.com/questions/31048953/what-are-these-three-dots-in-react-doing
        let NewColumn=document.getElementById('C02id_CreateNewColumn').value.toString();
        // If the name is not longer than 50 and unique, then Create new column
        if(NewColumn.toString().length>0 
            && NewColumn.toString().length<50 
            && SS_Column.map(Column=>Column.Name).includes(NewColumn)===false){
            // https://stackoverflow.com/questions/43846531/check-if-dictionary-object-in-array-contains-certain-value-in-javascript
            
            setSS_Reset(Math.random())
            // Generate New Key
            let let_NewKey = Math.random()
            while(SS_Column.map(Column=>Column.Key).includes(let_NewKey)===true){
                let_NewKey = Math.random()
            }

            // Add New Column in List of All Column
            let ss_Column = [...SS_Column]
            setSS_Column([{
                Key: let_NewKey,    // Property of the column 
                Name: NewColumn, 
                IsSelect:false,
                VisibleIndex: 0
                // VisibleIndex is updated in index.js
                },
                ...ss_Column    // Other Columns
            ])
            setSS_Reset(Math.random())
        }
    }
//****************************************************************************
//OUTPUT
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