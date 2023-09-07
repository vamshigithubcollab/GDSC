import React, { useState, useEffect } from "react";
import {db} from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Registerevent from "./registerevent";
const event= collection(db, "Events");

function User() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(event);
      const eventsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEvents(eventsData);
    };

    fetchData();
  }, []);

  return (
    <div>
        <h1>Events</h1>
      {events.map((EventsItem, index) => {
              return (
                <Registerevent
                  key={index}
                  id={index}
                  title={EventsItem.title}
                  content={EventsItem.content}
                />
              );
            })}
    </div>
  );
}

export default User;
