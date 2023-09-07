import React, { useState,useEffect } from "react";
import Newevent from './newevent'
import Showevent from '../Showevent'
import {db} from "../firebase";
import { collection , getDocs , getDoc ,  addDoc , updateDoc , deleteDoc , doc  } from "firebase/firestore";

const events = collection(db,"Events");

function Admin() {

        const [Events, setEvents] = useState([]);
      
        useEffect(() => {
          const fetchData = async () => {
            const querySnapshot = await getDocs(events);
            const eventsData = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setEvents(eventsData);
          };
        
          fetchData();
        }, []);

        async function addEvents(newEvents) {
          try {
            // Send data to Firebase
            await addDoc(events, newEvents);
            setEvents(prevEvents => [...prevEvents, newEvents]); // Update state after successful addition
          } catch (error) {
            console.error("Error adding document: ", error);
          }
        }
      
        async function deleteEvents(id) {
          try {
            const eventId = Events[id].id; // Assuming each event has a unique ID in the data
        
            // Delete the document from Firebase
            await deleteDoc(doc(events, eventId));
        
            // Remove the event from local state
            setEvents(prevEvents => prevEvents.filter((_, index) => index !== id));
          } catch (error) {
            console.error("Error deleting document: ", error);
          }
        }
        
      
        return (
          <div>
            <h1>Welcome to Admin Dashboard</h1>
            <Newevent onAdd={addEvents} />
            {Events.map((EventsItem, index) => {
              return (
                <Showevent
                  key={index}
                  id={index}
                  title={EventsItem.title}
                  content={EventsItem.content}
                  onDelete={deleteEvents}
                />
              );
            })}

          </div>
        );
      }
export default Admin
