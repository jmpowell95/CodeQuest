import React, { useState } from "react";
import { useParams } from "react-router-dom";
import confetti from "canvas-confetti";

export function Lesson() {
  const { language, id } = useParams();
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const result = eval(code); // ⚠️ Replace with sandboxed backend eval in prod
      setOutput(String(result));
      confetti({ spread: 60, origin: { y: 0.6 } });
    } catch (err) {
      setOutput("Error: " + err.message);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-primary mb-2">Lesson {id} - {language.toUpperCase()}</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
        className="w-full h-40 p-2 border rounded mb-4 font-mono"
      />
      <button
        onClick={runCode}
        className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition"
      >
        Run Code
      </button>
      <div className="mt-4 p-3 bg-gray-100 border rounded">
        <strong>Output:</strong> {output}
      </div>
    </div>
  );
}
