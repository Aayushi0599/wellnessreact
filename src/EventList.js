import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./lib/firebase";
import { useNavigate } from 'react-router-dom'
 
const EventList = () => {
    const [events, setEvents] = useState([]);
    const navigate=useNavigate()

    useEffect(() => {
   
        const fetchData = async () => {
          const querySnapshot = await getDocs(collection(db, "events"));
          console.log(querySnapshot)
          const formattedEvents = querySnapshot.docs.map((doc) => {
            const event = doc.data();
            // Convert start and end strings to Date objects
            const start = event.start.toDate();
            const end = event.end.toDate();
            // Format date and time strings for start and end
            const formatDate = (date) => date.toLocaleDateString();
            const formatTime = (time) =>
              time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });
    
            return {
              id: doc.id,
              title: event.title,
              start: formatDate(start),
              startTime: formatTime(start),
              end: formatDate(end),
              endTime: formatTime(end),
              img: event.img,
              registeredUsers:event.registeredUsers,
              message: event.message,
            };
          });
    
          setEvents(formattedEvents);
        };
        fetchData();
      }, []);
      console.log(events)
    
    
  return (
    <>
    <button onClick={()=>{navigate("/createevnt")}}>Create event</button>
    <div>
        {
            events.map((ele)=>{
            return (
                <ul key={ele.id}>
                    <li onClick={()=>{navigate(`/singleevent/${ele.id}`)}}>{ele.title}</li>
                </ul>

            )
            })
        }
    </div>
    </>
  )
}

export default EventList