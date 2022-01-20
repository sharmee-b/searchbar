import React, { useState } from "react";
import Search from "./search";
import ToDo from "./to-do";

function App() {
  return (
    <div className="App">
      <Search />
      <ToDo />
    </div>
  );
}

export default App;
