import React from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from './lib/firebase';
import { useState, useEffect, useCallback } from "react";



const Singlevent = () => {
  const params=useParams()
  const eventId=params.id
  const [event, setEvent] = useState(null);
  
  const [eventStarted, setEventStarted] = useState(true);
  const [eventClose, setEventClose] = useState(false);
  const [registered, setRegistered] = useState(false);


  useEffect(() => {
    const fetchEventData = async () => {
      const eventDocRef = doc(db, "events", eventId);
      const docSnapshot = await getDoc(eventDocRef);

      if (docSnapshot.exists()) {
        const eventData = docSnapshot.data();
        const start = eventData.start.toDate();
        const end = eventData.end.toDate();
        const currentDate = new Date();
        if (currentDate >= start ) {
          // handleStartEvent();
        } else {
          setEventStarted(false);
        }

        const startDate = start.toLocaleDateString();
        const startTime = start.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        const endDate = end.toLocaleDateString();
        const endTime = end.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        const updatedEvent = {
          ...eventData,
          start: startDate,
          startTime,
          end: endDate,
          endTime,
        };

        setEvent(updatedEvent);
        const eventRef = doc(db, "events", eventId);
        if (end < currentDate) {
          setEventClose(true);
        } else {
          setEventClose(false);
        }
      }
    };

    fetchEventData();
  }, [eventId, setRegistered, setEvent, setEventStarted]);
console.log(event)
  return (
    <div>{event &&
        <div>
            <div>{event.id}</div>
            <div>{event.title}</div>
            <div>{event.startTime}</div>
            <div>{event.id}</div>
        </div>
         }
      </div>
   
  )
}

export default Singlevent