import { useState } from "react";
import "./InputToDo.css";
const InputToDo = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const submitData = (e) => {
    e.preventDefault()
    setData(currentTods => {
      return [
        ...currentTods,
        {
          text: input,
          id: Math.random() * 1000,
        },
      ];
    });
    setInput("")
  };

  
  function deleteItem(id) {
    setData(currentTods =>{
        return currentTods.filter(data => data.id !== id)
    })
  }

  return (
    <div className="container">
      <div className="IBcontainer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="inputData"
          placeholder="new stack"
        />
        <button onClick={submitData} className="btn-add">
          ADD
        </button>
      </div>
      {data.map((data) => (
        <div key={data.id} className="TODOcontainer">
          <span className="ItemTitle">{data.text}</span>
          <button className="btn-delete" onClick={()=>deleteItem(data.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default InputToDo;
