import React from 'react';
import UserComponent from './UserComponent';
import Members from './Members';
function AppComponent() {
  function getData(){
    alert("Hello From App")
  }
  return (
    <div className="App">
      <UserComponent data={getData}/>
       <div>
        <Members data={getData}/>
       </div>
    </div>
  );
}

export default AppComponent;
