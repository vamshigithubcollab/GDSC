import React, { useState } from "react";
import "./newevent.css";

function Newevent(props) {
  const [Events, setEvents] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setEvents(prevEvents => {
      return {
        ...prevEvents,
        [name]: value
      };
    });
  }
  

  function submitEvents(event) {
    if (!Events.title || !Events.content) {
      alert("Please fill out both fields");
      return;
    }
    props.onAdd(Events);
    setEvents({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={Events.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={Events.content}
          placeholder="Take a Events..."
          rows="3"
        />
        <button onClick={submitEvents}>Add</button>
      </form>
    </div>
  );
}

export default Newevent;
