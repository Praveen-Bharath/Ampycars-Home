import React from 'react';
 import {Link} from 'react-router-dom';
 import "./Navbar.css";
 import Button from '@restart/ui/esm/Button';
 const Navbar = () => {

  const [logged,setlog]=React.useState(false);
   let username = localStorage.getItem("userdetail");
   username=JSON.parse(username);
   console.log(username);
   React.useEffect(()=>{
     if(username){
       setlog(true)
     } 
   },[logged])  
  return (
    <div>
    <div className="nav">
    { logged && (
      <span>
        {username.users.name}
      </span>
    )}
      <Link to="/"><Button>Home</Button></Link>
      { !logged && (
        <>
      <Link to="/login"><Button>Login</Button></Link>
      <Link to="/signup"><Button>SignUp</Button></Link>
      </>
      )}
    </div>
    </div>
  );
};
 
export default Navbar;