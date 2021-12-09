import React from "react";
import axios from 'axios';
import '../components/login.css';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

  function Login(){
   let navigate=useNavigate();
    function handleSubmit(e){  
      e.preventDefault();
      axios.post("http://localhost:5001/login",
      {user_email:document.getElementById("user_email").value,
      password:document.getElementById("password").value
      })
      .then(resp=>{
        console.log("executed")
         alert(resp.data.message);
        if(resp.data.message==="Logged-In Successfully"){
          localStorage.setItem("userdetail",JSON.stringify(resp.data));
      console.log("user account is detected",resp.data);
      document.getElementById("user_email").value="";
      document.getElementById("password").value="";
        navigate('/');
    }

      })
    
      .catch(function (err){
        console.log(err)
      })
    }
 
        return(
            <div>
            <div className="main">
            <div className="sub-main">
                <div>
                    <form onSubmit={handleSubmit}>
                    <div> <b>Login</b>  </div>
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