const U_RenameColumn = ({key,Name,setName,setIsRename}) => {
    function RenameOK(){
    setName(document.getElementById('NewName').value)
    setIsRename(false)
}
function RenameCancel(){
    setIsRename(false)
}
    return(
<>
<div key={key}>
<td><h1 class='Columns'>Rename: {Name} to </h1></td>
<td><input class='Columns' id='NewName'></input></td>
<td><button class='Columns' onClick={RenameOK}>OK</button></td>
<td><button class='Columns' onClick={RenameCancel}>Cancel</button></td>
</div>
</>
    )
}