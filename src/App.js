import './styles.css';
// import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CharacterList from "./components/CharacterList";
import NavigationBar from "./components/NavigationBar";
import HomeView from './views/HomeView';
import ProjectView from './views/ProjectView';


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
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/projects' element={<ProjectView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
