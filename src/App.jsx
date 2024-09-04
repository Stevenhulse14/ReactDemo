import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [team, setTeam] = useState(["Jigglypuff", "Chikorita", "Charmander"]);
  return (
    <>
      <Counter team={team} setTeam={setTeam} />
    </>
  );
}

export default App;
