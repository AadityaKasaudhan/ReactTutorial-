import React,{useState} from 'react'
import Student from './Student'
function PFApp() {
  const [name,setName]=useState("Anil")
  function apple()
  {
    alert("hello")
  }
  return (
    <div className="App">
     <h1>Props in React :</h1>
     <Student name={name}/>
     <button onClick={()=>{setName("Sidhu")}} >Update Name</button>
    </div>
  );
}

export default PFApp;