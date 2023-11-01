const AddNewColumn = ({ColumnList,setColumnList}) => {
    function handleClick(){
        // https://stackoverflow.com/questions/31048953/what-are-these-three-dots-in-react-doing
        let newInput=document.getElementById('ColumnName').value;
        if(newInput.toString().length>0 && newInput.toString().length<50){setColumnList([...ColumnList, {Name: newInput}]);}
    }
    return (
<div class='Column'>
<h1 class='Columns'>Add New Column:</h1>
<input class='Columns' id='ColumnName'></input>
<button class='Columns' onClick={handleClick}>OK</button>
</div>
)
}
export default AddNewColumn