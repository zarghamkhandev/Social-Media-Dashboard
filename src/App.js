import React from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import BigBox from "./components/BigBox";

function App() {
  return (
    <div className="container m-auto mt-10">
      <header className="flex ">
        <div>
          <h1 className="font-bold text-2xl">Social Media Dashboard</h1>
          <p className="text-xs">Total Followers: 23,004</p>
        </div>
        <div className="ml-auto flex items-center">
          <p>Dark Mode</p>
          <span className="ml-2 flex items-center">
            <ToggleSwitch />
          </span>
        </div>
      </header>

      <div>
        <BigBox />
      </div>
    </div>
  );
}

export default App;
