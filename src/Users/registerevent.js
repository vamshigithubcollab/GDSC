import React, { useState } from "react";

function Registerevent(props) {
  const [isRegistered, setIsRegistered] = useState(false);

  function handleClick() {
    setIsRegistered(true);
  }

  return (
    <div className="Events">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {isRegistered ? (
        <div style={{ color: "green" }}>
          Registered <span>&#10004;</span>
        </div>
      ) : (
        <button onClick={handleClick}>Register</button>
      )}
    </div>
  );
}

export default Registerevent;
