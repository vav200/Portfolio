import "./app.css";
import Header from "./header/Header";
import Main from "./main/Main";
import Krugloshlif from "./main/shlifovalnie/Krugloshlif";
import Ploskoshlif from "./main/shlifovalnie/Ploskoshlif";
import Vnutrishlif from "./main/shlifovalnie/Vnutrishlif";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/main/shlifovalnie/Krugloshlif" element={<Krugloshlif />} />
            <Route path="/main/shlifovalnie/Ploskoshlif" element={<Ploskoshlif />} />
            <Route path="/main/shlifovalnie/Vnutrishlif" element={<Vnutrishlif />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
