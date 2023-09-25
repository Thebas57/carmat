import BackgroundAnimation from "./components/BackgroundAnimation";
import Routes from "./components/Routes";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <Routes />
      <Song />
      <BackgroundAnimation />
    </div>
  );
}

export default App;
