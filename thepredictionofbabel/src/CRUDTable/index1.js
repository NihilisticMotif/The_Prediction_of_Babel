import { useState } from "react";
import './index.css'

function CRUDList() {
  // https://youtu.be/XtS14dXwvwE?si=rYQOe_tJbxmSnDWE

  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  return (
<>
{/* HTML Tag for CSS */}
<form className="App" autoComplete="off">

{/* Left UI Side */}
<div className="form-field">
<label htmlFor="service">Service(s)</label>
{/* Render Multiple JSX Tags */}
{serviceList.map((singleService, index) => (
  <div key={index} className="services">
    <div className="first-division">
      <input
        name="service"
        type="text"
        id="service"
        value={singleService.service}
        onChange={(e) => handleServiceChange(e, index)}
        required
      />
      {serviceList.length - 1 === index && serviceList.length < 4 && (
        <button
          type="button"
          onClick={handleServiceAdd}
          className="add-btn"
        >
          <span>Add a Service</span>
        </button>
      )}
    </div>
    <div className="second-division">
      {serviceList.length !== 1 && (
        <button
          type="button"
          onClick={() => handleServiceRemove(index)}
          className="remove-btn"
        >
          <span>Remove</span>
        </button>
      )}
    </div>
  </div>
))}
</div>

{/* Right UI Side */}
<div className="output">
<h2>Output</h2>
{serviceList &&
  serviceList.map((singleService, index) => (
    <ul key={index}>
      {singleService.service && <li>{singleService.service}</li>}
    </ul>
  ))}
</div>

</form>
</>
  );
}

export default CRUDList;