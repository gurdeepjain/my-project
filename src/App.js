import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./component/login/login";

function App() {
  return (
    <div className="">
     <Router>
      <Routes>
      <Route path="/" element={ <Login/> } />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
