import {useState} from 'react'
function FApp() {
  const [data,setData]=useState(0)
  function updateData()
  {
    setData(data+1)
   
  }
  console.warn("______");
  return (
    <div className="App">
     <h1>{data}</h1>
     <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default FApp;