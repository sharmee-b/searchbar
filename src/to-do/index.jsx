import React, { useState } from "react";

function ToDo() {
  const [entry, setEntry] = useState();
  const list = [];
  return (
    <div className="App">
      <input
        type="string"
        onChange={(event) => {
          setEntry(event.target.value);
        }}
      />
      <button
        onClick={() => {
          list.push(entry);
          console.log(list);
        }}
      >
        add
      </button>
      {list.map((item) => {
        console.log(item);
        return <li>{item}</li>;
      })}
    </div>
  );
}

export default ToDo;
