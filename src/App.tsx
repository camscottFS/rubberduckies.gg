import React, { useEffect } from 'react';
import './App.css';
import Apply from './Apply';
import Hero from './Hero';
import Navigation from "./Navigation";
import Ranks from './Ranks';
import Rules from './Rules';
import WipeSchedule from "./WipeSchedule";

function App() {
  useEffect(() => {
    document.title = 'Rubber Duckies - Rust Community'
  }, [])

  // @ts-ignore
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <WipeSchedule />
      <Rules />
      <Ranks />
      <Apply />
    </div>
  );
}

export default App;
