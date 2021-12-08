import React from "react";
import axios from 'axios';
import '../components/login.css';
import {Link} from 'react-router-dom';

  function Login(){
   
    function handleSubmit(e){  
      e.preventDefault();
      axios.post("http://localhost:5000/login",
      {user_email:document.getElementById("user_email").value,
      password:document.getElementById("password").value
      })
      .then(resp=>{
        alert("Logged in Successfully")
        console.log("user account is detected",resp.data);
       document.getElementById("user_email").value="";
      document.getElementById("password").value="";
      })
      .catch(function (err){
        console.log(err)
      })
    }
 
        return(
            <div>
            <div className="header" ><b>Ampy Cars</b> </div>
            <div className="main">
            <div className="sub-main">
                <div>
                    <form onSubmit={handleSubmit}>
                    <div> <b>Login</b> </div>
                    <input type="email" id="user_email" name="user_email" placeholder="User Email"  required ></input>
                    <input type="password" id="password" name="password" placeholder="Password" required ></input>
                    <button type="submit" className="login-button" > Login </button>
                    <div>If ur new user <Link to="/signup" type="submit"> <a>signup</a></Link></div>
          </form>
                </div>
            </div>
            </div>
            </div>
        )
    }

export default Login;