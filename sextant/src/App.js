import "./App.css";
import Entry from "./components/Entry";
import Networkaddress from "./components/Networkaddress";
import Pylon from "./components/Pylon";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sextant</h1>
      </header>
      <Entry>
        <Networkaddress value="ipv4" />
        <Networkaddress value="ipv6" />
        <Pylon />
      </Entry>
    </div>
  );
}

export default App;
