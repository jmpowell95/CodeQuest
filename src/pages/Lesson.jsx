
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLessonById } from '../utils/loadPythonLessons';

export function Lesson() {
  const { id } = useParams();
  const lesson = getLessonById(id);

  const [code, setCode] = useState(lesson?.starter_code || '');
  const [output, setOutput] = useState('');

  const runCode = () => {
    if (code.includes('print')) {
      setOutput('✅ Code ran successfully!');
    } else {
      setOutput('🤖 Try using print or follow the task instructions.');
    }
  };

  if (!lesson) return <p>Lesson not found.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{lesson.title}</h2>
      <p>{lesson.explanation}</p>
      <pre style={{ background: '#111', padding: '1rem', borderRadius: '8px' }}>
        {lesson.example}
      </pre>
      <p><strong>Task:</strong> {lesson.task}</p>
      <p><strong>Hint:</strong> {lesson.hint}</p>
      <textarea
        style={{ width: '100%', height: '150px' }}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={runCode} style={{ marginTop: '1rem' }}>Run Code</button>
      {output && (
        <div style={{ marginTop: '1rem', background: '#222', padding: '1rem', borderRadius: '8px' }}>
          {output}
        </div>
      )}
    </div>
  );
}
