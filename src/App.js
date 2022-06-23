import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Hotlines from "./components/Hotlines";
import Home from "./components/Home";
import Hotline from "./components/Hotline";
import hotlines from "./components/api";

function App() {
  const hotline = hotlines;

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/hotlines">Hotlines</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/hotlines" element={<Hotlines hotlines={hotlines} />}>
          <Route path=':hotlineId' element={<Hotline />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
