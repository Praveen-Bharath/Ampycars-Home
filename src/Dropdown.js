import { useState } from "react";
import Select from "react-select";
import axios from 'axios';
import "./dropdown.css";


function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showToLocation, setShowToLocation] = useState(true);
  const baseUrl = "http://localhost:5001/trips";
  const baseUrlRound = "http://localhost:5001/tripsrounds";
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const fromLocation = event.target.fromLocation.value;
    const toLocation = !showToLocation
      ? undefined
      : event.target.toLocation.value;
    const date = event.target.dateTime.value;
    console.log(`${fromLocation}\n${toLocation}\n${date}`);

    if(selectedOption==="round-trip")
    {
      axios.post(baseUrlRound,
      {floc:document.getElementById("floc").value,
      dte:document.getElementById("dte").value
      })
      .then(resp=>{console.log(resp.data)
        document.getElementById("floc").value="";
        document.getElementById("dte").value="";
      })
      .catch(function (err){
        console.log(err)
      })
    }
    else{
        axios.post(baseUrl,
          {"floc":document.getElementById("floc").value,
          "tloc":document.getElementById("tloc").value,
          "dte":document.getElementById("dte").value
          })
          .then(resp=>{console.log(resp.data)
            document.getElementById("floc").value="";
            document.getElementById("tloc").value="";
            document.getElementById("dte").value="";
          })
          .catch(err=>{
            console.log(err)
          })
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Select
          className="dropdown"
          options={options}
          onChange={handleDropdownChange}
          value = {selectedOption}
        ></Select>
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
              //type="datetime-local"
              type="date"
            ></input>
          </div>
          <button id="btn" type="submit" >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
}

// function Location() {
//   const [showTo, setShowTo] = useState(true);
//   return (
//     <div>
//       <div className="location_container">
//         <div id="from">
//           From Location :<input className="fromLocation" type="text"></input>
//           <br />
//           <br />
//           <div id="to">
//             To Location :
//             {showTo && <input className="fromLocation" type="text"></input>}
//             <br /> <br />
//             <div id="date">
//               Date of Travel :
//               <input className="fromLocation" type="datetime-local"></input>
//               <br /> <br />
//               <div id="button">
//                 <button id="btn" type="submit">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default Dropdown;
