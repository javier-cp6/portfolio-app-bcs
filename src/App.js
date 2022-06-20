import './styles.css';
// import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CharacterList from "./components/CharacterList";
import NavigationBar from "./components/NavigationBar";
import HomeView from './views/HomeView';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Router>
        <NavigationBar />
        <HomeView />
        {/* <div>
          <Routes>
            <Route path='/' element={<HomeView/>}/>
          </Routes>
        </div> */}

      </Router>
    </>
  );
}

export default App;
