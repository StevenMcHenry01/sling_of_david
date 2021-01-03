import logo from "./logo.svg";
import "./App.css";
import * as AssetsService from "./services/assets-service";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={AssetsService.getResourceURL(logo)}
          className="App-logo"
          alt="logo"
        />
      </header>
    </div>
  );
}

export default App;
