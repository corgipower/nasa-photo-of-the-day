import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";

function App() {
  return (
    <div className="App">
      <div className="App-logo">
        <p>
          NASA Photo of the Day
        </p>
      </div>
      <PhotoList />
    </div>
  );
}

export default App;
