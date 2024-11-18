import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('<http://localhost:8080/api/users>')
      .then((res) => res.text())
      .then((data) => console.log(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>User</h2>
      <ul>
       
      
      </ul>
    </div>
  );
}
export default App;
