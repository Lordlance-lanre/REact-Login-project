import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <div className="">
     <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
     </Routes>
    </div>
  );
}

export default App;
