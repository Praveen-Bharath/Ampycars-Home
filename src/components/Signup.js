import React from 'react';
import axios from 'axios';
import "../components/Signup.css"

function Signup() {
   
    function handlechange(){
        const password = document.getElementById("password");
        const conformpassword = document.getElementById("confirmPassword");
        const email =document.getElementById("email");
        Validation(email);
        if(password.value===conformpassword.value)
        {
        axios.post("http://localhost:5001/addvalue",{
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        phoneNo:document.getElementById("phoneNo").value
    })
    .then(resp=>{
        console.log(resp.data);
       document.getElementsByName("name").value="";
        document.getElementsByName("email").value="";
        document.getElementsByName("password").value="";
        document.getElementsByName("phoneNo").value="";
})
.catch(function(err){
    console.log("error");
})
    }

 if(password.value!==conformpassword.value){
    alert("Password Mismatched");
}       console.log("Password Matched");
    }
    function Validation(p){
        if((p.value=== "")||(!p.value.includes("@gmail.com"))){
            p.nextElementSibling.innerHTML= "Invalid Email";
            alert("Invalid Email");
        }
    }
    return (
        <div className="main">
        <div className='signupContainer'>
            <form onSubmit={handlechange}>
            <h2>Sign Up</h2>

                <div className = 'field'>
                <label>Username</label>
                <div>
                    <input type= 'text' id="name" name= 'name' placeholder= 'Enter User_name'
                     required 
                     pattern= '^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$'
                     />
                </div>
                <div>
                    <label>Email</label>
                    <input type= 'text' id="email" name= 'email' placeholder= 'Enter Email-Id' 
                    required/>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="tel" id="phoneNo" name= 'phoneNo' placeholder= 'Mobile Number - xxxxx xxxxx' required pattern="[0-9]{5} [0-9]{5}"  />
                </div>
                <div>
                    <label>Password</label>
                    <input type= 'password' id="password" name= 'password' placeholder= 'Enter Password' 
                    required
                     />
                </div>
                <div>
                    <label>Conform Password</label>
                    <input type= 'password' id="confirmPassword" name= 'confirmPassword' placeholder= 'Enter Confirm Password' 
                    required
                     />
                </div>
                </div>
                <button onClick={handlechange} type="submit">Sign Up</button>
               {/* <br/> <div>
                New User ? please <a href="https://www.google.com">SignUp</a>
            </div> */}
            </form>
            
        </div>
        </div>
    )
}

export default Signup
