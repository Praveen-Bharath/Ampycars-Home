import { useState } from "react";
import Select from "react-select";
import axios from 'axios';
import '../components/dropdown.css';
import {Link } from "react-router-dom";
import { myConfig } from '../config';
import { useNavigate } from 'react-router-dom';


function Dropdown() {
  let navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [showToLocation, setShowToLocation] = useState(true);
  const options = [
    { value: "single-way-trip", label: "Single-way Trip" },
    { value: "round-trip", label: "Round Trip" },
  ];

  const handleDropdownChange = (selectedValue) => {
    console.log(selectedValue);
    setSelectedOption(selectedValue.value);
    if (selectedValue.value === "round-trip") {
      setShowToLocation((value) => !value);
    }
    if (selectedValue.value !== "round-trip" && !showToLocation) {
      setShowToLocation((value) => !value);
    }
  };
    const  handleSubmit = (event) => {
    event.preventDefault();
    let username = localStorage.getItem("userdetail");
    
    username= JSON.parse(username)


    const fromLocation = event.target.fromLocation.value;
    const toLocation = !showToLocation
      ? undefined
      : event.target.toLocation.value;
    const date = event.target.dateTime.value;
    console.log(`${fromLocation}\n${toLocation}\n${date}`);

    if(selectedOption==="round-trip" && selectedOption!=="")
    {
      axios.post(myConfig.apiUrl+'/tripsrounds',
      {floc:document.getElementById("floc").value,
      dte:document.getElementById("dte").value,
      "userId":username.logdata.UserId
      })
      
      .then(resp=>{console.log(resp.data)
        document.getElementById("floc").value="";
        document.getElementById("dte").value="";
        console.log("got REsponse");
         navigate("/carlist",{replace:true});
      })
      .catch(function (err){
        console.log(err)
      })
    }
    else{
      if(selectedOption!==""){
      if(fromLocation!==toLocation && selectedOption!==""){
        axios.post(myConfig.apiUrl+'/trips',
          {
          "floc":document.getElementById("floc").value,
          "tloc":document.getElementById("tloc").value,
          "dte":document.getElementById("dte").value,
          "userId":username.users.userId
          })
          .then(resp=>{console.log(resp.data)
            document.getElementById("floc").value="";
            document.getElementById("tloc").value="";
            document.getElementById("dte").value="";
            console.log("got REsponse");
            navigate("/carlist",{replace:true});
          })
          .catch(err=>{
            console.log(err)
          })
    }
    else{
      alert("Please provide different Locations");
    }
  }
    else{
      alert("Please Select the Type of Trip");
    }
  }
  };
  return (
    <div className="bg">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="heading"> Select Type of Trip to Travel </div>
        <Select
          className="dropdown"
          required
          options={options}
          onChange={handleDropdownChange}
          value = {selectedOption}
        ></Select>
        <div> {selectedOption} </div>
        <div className="location_container">
          <div id="from">
            From Location :
            <input
              id="floc"
              className="fromLocation"
              required
              name="fromLocation"
              type="text"
              placeholder="From Location"
            ></input>
          </div>
          {showToLocation && (
            <div id="to">
              To Location :
              <input
                id="tloc"
                className="toLocation"
                required
                name="toLocation"
                type="text"
                placeholder="To Location"
              ></input>
            </div>
          )}
          <div id="date" name="date">
            Date of Travel :
            <input
            id="dte"
              className="dateTime"
              required
              name="dateTime"
              type="date"
            ></input>
          </div>
          <button id="btn" type="submit" >
            Search
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Dropdown;
