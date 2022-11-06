import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TeacherPage from './pages/teachers'

import '../styles/global.css';

export function RoutesApp(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/teachers" element={<TeacherPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

