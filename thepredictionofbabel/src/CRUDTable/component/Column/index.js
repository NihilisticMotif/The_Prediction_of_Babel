import { useState } from 'react';
import './index.css';
import Column from './component/Column';
import SearchColumn from './component/ReadColumn';
import AddNewColumn from './component/CreateColumn';

const ColumnS = () => {
    const [ColumnList,setColumnList]=useState([{Name: 'Row Index'}]);
    const ColumnHTMLs = ColumnList.map((Name, index) => <Column index={index+1} key={index+1} Name={Name.Name}/>);
    // https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
    // https://youtu.be/XtS14dXwvwE?si=rYQOe_tJbxmSnDWE
    // https://react.dev/learn/rendering-lists#where-to-get-your-key
    // https://stackoverflow.com/questions/72217570/insert-counter-in-a-reactjs-map
    return (
<>
<div id='ColumnSPanel'>
<hr/>
<AddNewColumn ColumnList={ColumnList} setColumnList={setColumnList}/>
<hr/>
<SearchColumn/>
<hr/>
{ColumnHTMLs}
<hr/>
</div>
</>
)
}

export default ColumnS