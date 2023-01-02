import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { value } from "../redux/Header";

const Home = () => {
  return (
    <div>
      <Calendar />
      <h2 style={{ color: "#9400d3", fontSize: "32" }}>Hello Web App {value}</h2>
    </div>
  );
};

export default Home;
