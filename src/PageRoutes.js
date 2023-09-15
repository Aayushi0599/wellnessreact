import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventList from "./EventList";
import Singlevent from "./Singlevent";
import Createevent from "./Createevent";

const PageRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/createevnt" element={<Createevent />} />
          <Route path="/singleevent/:id" element={<Singlevent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default PageRoutes;
