import "./App.css";
import Entry from "./components/Entry";
import Networkaddress from "./components/Networkaddress";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sextant</h1>
      </header>
      <Entry>
        <Networkaddress value="ipv4" />
        <Networkaddress value="ipv6" />
      </Entry>
    </div>
  );
}

export default App;
