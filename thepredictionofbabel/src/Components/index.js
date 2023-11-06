import C01_Table from "./C01_Table";
import C00_Header from "./C00_Header";
import C02_Column from './C02_Column'
const Components=()=>{
    return(

<div id='App'>

<C00_Header/>
<div id='Body'>
<C02_Column/>
<C01_Table/>
</div>

<div id='Body'>
<C01_Table/>
</div>


</div>
    )
}

export default Components