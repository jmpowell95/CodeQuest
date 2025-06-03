
import React from 'react';
import { Link } from 'react-router-dom';

export function PythonCourse() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Python Course</h2>
      <ul>
        <li><Link to="/lesson/python/1">Lesson 1: Hello World</Link></li>
        <li><Link to="/lesson/python/2">Lesson 2: Variables</Link></li>
        <li><Link to="/lesson/python/3">Lesson 3: If Statements</Link></li>
      </ul>
    </div>
  );
}
