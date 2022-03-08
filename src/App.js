import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import NavbarBootstrap from "./components/NavBar/NavbarBootstrap";

import Main from "./Pages/Main";

function App() {
  return (
    <div className="app">
      {/* <NavBar /> */}
      <NavbarBootstrap />
      <Main />
    </div>
  );
}

export default App;
