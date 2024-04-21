import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useLoaderData } from "react-router-dom";
import Coffee from "./components/Coffee";

function App() {
  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <>
      <h1 className="text-5xl text-purple-600">
        Coffee All : {coffees.length}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <Coffee key={coffee._id} coffee={coffee}></Coffee>
        ))}
      </div>
    </>
  );
}

export default App;
