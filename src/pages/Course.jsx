import React from "react";
import { Link, useParams } from "react-router-dom";

export function Course() {
  const { language } = useParams();

  const lessons = [
    { id: 1, title: "Variables & Data Types" },
    { id: 2, title: "Conditionals" },
    { id: 3, title: "Loops" }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4">{language.toUpperCase()} Course</h2>
      <ul className="space-y-2">
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link
              to={`/lesson/${language}/${lesson.id}`}
              className="block bg-white border border-gray-200 rounded-lg px-4 py-3 shadow hover:bg-accent hover:text-white transition"
            >
              {lesson.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
