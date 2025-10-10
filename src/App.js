import './App.css';
import MainLayout from "./MainLayout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

function App() {
  return (
        <div>
        <Router>
          <Routes>
            <Route path="recipeapp_react/" element={<MainLayout />} />
          </Routes>
        </Router>
        </div>
     
  );
}

export default App;
