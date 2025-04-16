import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import React from "react";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;