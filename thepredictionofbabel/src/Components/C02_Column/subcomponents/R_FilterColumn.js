const R_FilterColumn = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // HOOK: setState()
    setSS_Reset,    // from ../index.js, Reset After update activate setSS_Filter
    setSS_Filter,   // from ../index.js, Filter Column that match with SS_Filter
    setSS_FilterColumn,// from ../index.js, Reset SS_FilterColumn as []
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
        setSS_FilterColumn([])
        setSS_Reset(Math.random())
    }
//****************************************************************************
// FUNCTION_01: Sort SS_Column
//****************************************************************************
    function f_Sort(property) {
        // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
        let sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
    function f_DSort(){
        // 100,...,1,0
        // reverse
        let let_Column = [...SS_Column]
        let_Column.sort(f_Sort("Name"));
        let_Column.reverse();
        // https://www.w3schools.com/jsref/jsref_sort.asp
        // https://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json
        setSS_FilterColumn([])
        setSS_Reset(Math.random())
        setSS_Column(let_Column)
    }
    function f_ASort(){
        // 0,1,...,100
        let let_Column = [...SS_Column]
        let_Column.sort(f_Sort("Name"));
        setSS_FilterColumn([])
        setSS_Reset(Math.random())
        setSS_Column(let_Column)
    }
//****************************************************************************
// OUTPUT
//****************************************************************************
    return (
<div class='C02id'>
<h1 class='C02id'>Search:</h1>
<input class='C02id' id='C02id_FilterColumnName'></input>
<td><button class='C02id' onClick={f_Filter}>OK</button></td>
<td><button class='C02id' onClick={f_DSort}>Descending Sort</button></td>
<td><button class='C02id' onClick={f_ASort}>Ascending Sort</button></td>
</div>
)
}
//****************************************************************************
export default R_FilterColumn