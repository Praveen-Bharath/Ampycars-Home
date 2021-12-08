import React from "react";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Dropdown from "./components/Dropdown.js";
import Cars from "./components/carList";
import Login from "./components/Login.js";
import Signup from "./components/Signup";
import Navbar from "./components/Navbarpage/Navbar.js";


function App() {
  return (
    <div>
 
  <Router>
  <Navbar />
     <Routes>
        <Route exact path="/" element={<Dropdown/>}/>
        <Route path="/carlist" element={<Cars/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
