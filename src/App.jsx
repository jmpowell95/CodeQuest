
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PythonCourse } from './pages/PythonCourse';
import { Lesson } from './pages/Lesson';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/python" element={<PythonCourse />} />
        <Route path="/lesson/python/:id" element={<Lesson />} />
      </Routes>
    </Router>
  );
}
