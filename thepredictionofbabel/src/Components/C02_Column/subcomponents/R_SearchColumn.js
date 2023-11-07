const R_SearchColumn = (
//****************************************************************************
{
    setSS_Reset,    // from ../index.js, Reset After update activate setSS_Filter
    setSS_Filter,   // from ../index.js, Filter (Search) Column
    SS_Column,      // from ../index.js, Sort Column
    setSS_Column    // from ../index.js, Sort Column
}) => {
//****************************************************************************
    function f_Search(){
        //const Value=event.target.value;
        let Value = document.getElementById('C02id_SearchColumnName').value
        setSS_Filter(Value)
        setSS_Reset(Math.random())
    }
    function f_DSort(){
        // 100,...,1,0
        let SortedColumn=SS_Column.map(Column=>Column.Name) // Create a copy of the original array
        SortedColumn.sort();
        SortedColumn.reverse();
        // https://www.w3schools.com/jsref/jsref_sort.asp
        setSS_Reset(Math.random())
        //setSS_Column(SortedColumn)
    }
    function f_ASort(){
        // 0,1,...,100
        let SortedColumn=SS_Column.map(Column=>Column.Name) // Create a copy of the original array
        SortedColumn.sort();
        // https://www.w3schools.com/jsref/jsref_sort.asp
        setSS_Reset(Math.random())
    }
//****************************************************************************
    return (
<div class='C02id'>
<h1 class='C02id'>Search:</h1>
<input class='C02id' id='C02id_SearchColumnName'></input>
<td><button class='C02id' onClick={f_Search}>OK</button></td>
<td><button class='C02id' onClick={f_DSort}>Descending Sort</button></td>
<td><button class='C02id' onClick={f_ASort}>Ascending Sort</button></td>
</div>
)
}
//****************************************************************************
export default R_SearchColumn