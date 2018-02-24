import React from 'react';
import './App.css';
import ProfileList from "./components/ProfileList";

const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: '50%',
    }}
  >
      <div
        style={{
          display: "flex",
          flex: 1,
          border: "1px solid blue",
          backgroundColor: "orange"
        }}
      />
      <div
        style={{
          flex: 1,
          border: "1px solid blue",
          backgroundColor: "green"
        }}
      />
      <div
        style={{
          flex: 1,
          border: "1px solid blue",
          backgroundColor: "pink"
        }}
      />

  </div>
);

export default App;
