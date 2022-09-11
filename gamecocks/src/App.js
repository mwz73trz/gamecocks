import "./index.css";
import React, { useState } from "react";
import Schedule from "./Schedule";
import emblem from "./media/emblem.png";
import data from "./data";

function App() {
  const [games, setGames] = useState(data);
  return (
    <main>
      <div className="main-heading">
        <img className="emblem" src={emblem} alt="Gamecocks" />
        <h1>Gamecocks App</h1>
      </div>
      <section>
        <Schedule games={games} />
      </section>
    </main>
  );
}

export default App;
