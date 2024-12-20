import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Navbar } from "./components/Navbar";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
);