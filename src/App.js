import React, { useEffect, useState } from "react";
import Items from "./Components/Items";
import "./App.css";

export default function App() {
  const timer = Math.trunc(Math.random() * 30) + 30;

  const [time, setTime] = useState(timer);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  });

  return (
    <>
      <div className="flex">
        <h3>Time Left {time}</h3>
      </div>
      <h1>Claim Your Free trial Class</h1>
      <div className="inner-cont">
        <h2>Class schedule</h2>
      </div>
      <Items />
    </>
  );
}
