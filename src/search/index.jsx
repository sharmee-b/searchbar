import React, { useState } from "react";

function Search() {
  const [val, setValue] = useState();
  const list = ["sharmee", "rich", "pratima", "sanat"];
  return (
    <div className="App">
      <input
        type="string"
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      {list.map((item) => {
        if (item === val) return <li>{item}</li>;
      })}
    </div>
  );
}

export default Search;
