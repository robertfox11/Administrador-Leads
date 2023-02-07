import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { obtenerLeads } from "./data/leads";
import reactLogo from "./assets/react.svg";
import "./App.css";
function App() {
  return (
    <>
      <div className="w-full">
        {/* <h1 className="font-black text-4xl text-blue-900">Leads</h1>
        <p className="mt-3">Administra tus Leads</p> */}
        {/* <div className="w-full grid grid-cols-1 p-2 border border-red-400 gap-1"></div> */}
      </div>
    </>
  );
}

export default App;
