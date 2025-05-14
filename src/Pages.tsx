import './Pages.css'

import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

import { BrowserRouter, Routes, Route } from "react-router";

const Pages = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
