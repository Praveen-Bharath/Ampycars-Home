import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card} from 'react-bootstrap';
import "./carList.css";
import {Link} from "react-router-dom";

const Cars = ()=>{
  const axios = require('axios');
  const[car,setcar]=useState([]);

 
const getcardata = async()=>{
  try{
    const data = await axios.get("http://localhost:7050/api/carlist");

setcar(data.data);
}catch(e){
  console.log(e);
}
};


useEffect(()=>{
  getcardata();
},[]);
  return(
    
<div>
<h1 class="card-title">select your car</h1>
<div class="card-columns">
   
     {car.map((item)=>{
        return(   
          <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title key= {item.id} >{item.title}</Card.Title>
            <Card.Text >₹ {item.price}</Card.Text>
            <Card.Text >{item.description}</Card.Text>
            <Link to="/login" type="submit">
            <Button  key= {item.id} variant="primary">Book</Button>
            </Link>
            
            &nbsp;&nbsp;
            <Link to="/" type="submit"><Button variant="secondary"> Cancel </Button>
            </Link>
          </Card.Body>
        </Card>
         )
             })}
      </div>
      </div>
); 
};

export default Cars;