import { useState } from 'react';

/*

/////////////////////////////////////////////////////////////////////////////////////////////

const MainColumn = ({key,index,Name,Inspection,RenameOpen}) => {
    // https://react.dev/learn/sharing-state-between-components
    return(
<>
<div key={key}>
<td><button class='Columns' onClick={Inspection}>{index}</button></td>
<td><button class='Columns' onClick={RenameOpen}>Rename</button></td>
<td><button class='Columns'>Edit</button></td>
<td><button class='Columns'>Display</button></td>
<td><h1 class='Columns'>{Name}</h1></td>
</div>
</>
    )
}

/////////////////////////////////////////////////////////////////////////////////////////////

const RenameColumn = ({key,Name,setName,setIsRename}) => {
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

/////////////////////////////////////////////////////////////////////////////////////////////

const DeleteColumn = ({Name,setName,setIsRename}) => {
    function RenameOK(){
    setName(document.getElementById('NewName').value)
    setIsRename(false)
}
function RenameCancel(){
    setIsRename(false)
}
    return(
<>
<div>
<td><h1 class='Columns'>Rename: {Name} to </h1></td>
<td><input class='Columns' id='NewName'></input></td>
<td><button class='Columns' onClick={RenameOK}>OK</button></td>
<td><button class='Columns' onClick={RenameCancel}>Cancel</button></td>
</div>
</>
    )
}
/////////////////////////////////////////////////////////////////////////////////////////////

*/

//const [IsRename,setIsRename]=useState(false)
//const [YourName,setYourName]=useState(Name)
//function RenameOpen(){setIsRename(true)}
//let Column;
//if (IsRename) {Column = <RenameColumn key={key}  Name={YourName} setName={setYourName} setIsRename={setIsRename}/>;}
//else          {Column = <MainColumn   key={key} index={index} Name={YourName} Inspection={Inspection} RenameOpen={RenameOpen}/>;} 
// {Column}

const Column = ({key,index,Name,CIs,setCIs}) => {
    function Inspection(){alert('HelloWorld')}
    return (
<div class='Column'>

<>
<div key={key}>
<td><button class='Columns'>{index}</button></td>
<td><button class='Columns'>Edit</button></td>
<td><h1 class='Columns'>{Name}</h1></td>
</div>
</>

</div>
    )
}

export default Column;