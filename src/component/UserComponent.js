import React from 'react'
function UserComponent(props) {
  return (
    <div>
        <h1>User Component </h1>
        <button onClick={()=> props.data()}>Call data function </button>
    </div>
  );
}

export default UserComponent;
