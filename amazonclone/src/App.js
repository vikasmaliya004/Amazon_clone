import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import CheakOut from './CheakOut/CheakOut';
// import Login from "./Login";
import {BrowserRouter, Route,  Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>    
<Header></Header>

<Routes>
          <Route path="/cheakOut" element = {<CheakOut/>}> 
         
          </Route>
          <Route path='/' element  = {<Home/>}>
          </Route>
</Routes>

</BrowserRouter>


    </div>
  );
}

export default App;
