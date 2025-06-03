
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export function Lesson() {
  const { id } = useParams();
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = () => {
    if (code.includes('print')) {
      setOutput('Code ran successfully. ✅');
    } else {
      setOutput('Try using a print statement. 🤖');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Lesson {id}</h2>
      <textarea
        style={{ width: '100%', height: '150px' }}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your Python code here..."
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
