import React from "react";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Dropdown from "./Dropdown";
import Cars from "./components/carList";
import Login from "./components/Login";


function App() {
  return (
  <Router>

     <Routes>
        <Route exact path="/" element={<Dropdown/>}/>
        <Route path="/carlist" element={<Cars/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  
  );
}

export default App;
