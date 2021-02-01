import logo from './logo.svg';
import './App.css';
import SignIn from './Component/Register';
import Section from "./Component/Section";
import Header from "./Component/Header";
import { ContextProvider } from "./Context/Context";
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
  <ContextProvider>
    <div className="App">
      <Router>
      <Header/>
      
     <Section/>
     </Router>
    </div>
  </ContextProvider>
  );

}

export default App;
