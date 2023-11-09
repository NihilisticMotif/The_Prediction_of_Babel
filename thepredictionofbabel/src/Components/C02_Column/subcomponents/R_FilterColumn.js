const R_FilterColumn = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // HOOK: setState()
    setSS_Reset,    // from ../index.js, Reset After update activate setSS_Filter
    setSS_Filter,   // from ../index.js, Filter Column that match with SS_Filter
    //setSS_FilterColumn,// from ../index.js, Reset SS_FilterColumn as []
    SS_Column,      // from ../index.js, Sort Column
    setSS_Column,   // from ../index.js, Sort Column
}) => {
//****************************************************************************
// FUNCTION_00: Update SS_Filter, so that index.js update the new filter word.
//****************************************************************************
    function f_Filter(){
        //const Value=event.target.value;
        let let_Input = document.getElementById('C02id_FilterColumnName').value
        setSS_Filter(let_Input)
        //setSS_FilterColumn([])
        setSS_Reset(Math.random())
    }
//****************************************************************************
// FUNCTION_01: Sort SS_Column
//****************************************************************************
    function f_Sort(property) {
        // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
        let let_SortOrder = 1;
        if(property[0] === "-") {
            let_SortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            let let_Result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return let_Result * let_SortOrder;
        }
    }
    function f_DSort(IsD){
        // 100,...,1,0
        let ss_Column = [...SS_Column]
        ss_Column.sort(f_Sort("Name"));
        if(IsD===true){ss_Column.reverse();}
        // https://www.w3schools.com/jsref/jsref_sort.asp
        // https://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json
        //setSS_FilterColumn([])
        setSS_Reset(Math.random())
        setSS_Column(ss_Column)
    }
//****************************************************************************
// OUTPUT
//****************************************************************************
    return (
<div class='C02id'>
<h1 class='C02id'>Search:</h1>
<input class='C02id' id='C02id_FilterColumnName'></input>
<td><button class='C02id' onClick={f_Filter}>OK</button></td>
<td><button class='C02id' onClick={()=>f_DSort(true)}>Descending Sort</button></td>
<td><button class='C02id' onClick={()=>f_DSort(false)}>Ascending Sort</button></td>
</div>
)
}
//****************************************************************************
export default R_FilterColumn