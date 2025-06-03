
import React from 'react';
import { Link } from 'react-router-dom';
import { getAllLessons } from '../utils/loadPythonLessons';

export function PythonCourse() {
  const lessons = getAllLessons();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Python Course</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link to={`/lesson/python/${lesson.id}`}>{lesson.id}. {lesson.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
