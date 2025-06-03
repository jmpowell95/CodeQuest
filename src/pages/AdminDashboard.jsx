
import React, { useState } from "react";
import lessonData from "../data/python.json";

export function AdminDashboard() {
  const [lessons, setLessons] = useState(lessonData.course);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addLesson = () => {
    const newLesson = { id: lessons.length + 1, title, content };
    setLessons([...lessons, newLesson]);
    setTitle(""); setContent("");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <div className="mb-4">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Lesson Title" className="border p-2 mr-2"/>
        <input value={content} onChange={e => setContent(e.target.value)} placeholder="Lesson Content" className="border p-2 mr-2"/>
        <button onClick={addLesson} className="bg-primary text-white px-4 py-2 rounded">Add Lesson</button>
      </div>
      <ul>
        {lessons.map(l => (
          <li key={l.id} className="border-b py-2">{l.id}. {l.title}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-gray-500">Note: Changes are in-memory only for now.</p>
    </div>
  );
}
