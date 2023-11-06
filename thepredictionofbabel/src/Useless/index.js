import { useState } from "react";
import './index.css'
import ColumnS from './component/Column'
import Table from "./component/Table";
import Editor from "./component/Editor";
import Header from "./component/Header";
function CRUDTable() {
    return (
<div id='App'>
<div id='Body'>
<Editor/>
<Table/>
</div>

<div id='Body'>
<ColumnS/>
<Table/>

</div>
</div>
)
}

export default CRUDTable;