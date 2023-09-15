import React, { useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import CreateEventForm from "./Components/CreateEventForm";
import { db } from "./lib/firebase";

const Createevent = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      event_title,
      start_date,
      start_time,
      welcomesession,
      welcometime,
      number_participents,
      img,
      message,
    } = event.target.elements;
    const startDateTime = new Date(`${start_date.value}T${start_time.value}`);
    const endDateTime = new Date(
      startDateTime.getTime() + welcometime.value * 60000
    ); // Add welcometime in minutes to startDateTime
    const eventData = {
      title: event_title.value,
      start: Timestamp.fromDate(startDateTime),
      end: Timestamp.fromDate(endDateTime),
      welcomesession: welcomesession.value,
      welcometime: welcometime.value,
      participant: number_participents.value,
      img: img.value,
      message: message.value,
      registeredUsers: [],
    };
    try {
      await addDoc(collection(db, "events"), eventData);
      event.target.reset();
      setMessage("Event added successfully");
      setVisible("true");
    } catch (error) {
      console.error("Error adding event: ", error);
    }
  };

  return (
    <div className="  flex container text-gray-100 mx-auto pt-5 pb-10 gap-5">
     <div className=" bg-gray-700 bg-opacity-20 rounded-xl px-20 py-10">
          <h2 className="text-3xl font-semibold tracking-wider">
            Create Event
          </h2>
          <CreateEventForm onSubmit={handleSubmit} />
        </div>
      </div>
  );
};

export default Createevent;
