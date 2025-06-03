
import React from 'react';

export function Home() {
  return (
    <div style={{
      textAlign: 'center',
      background: 'linear-gradient(135deg, #6c63ff 0%, #00c2cb 100%)',
      color: 'white',
      borderRadius: '20px',
      padding: '4rem 2rem',
      boxShadow: '0 0 20px rgba(0,0,0,0.5)'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: '800' }}>Welcome to CodeQuest 🚀</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '1.5rem auto' }}>
        Learn to code with interactive lessons, smart AI feedback, and gamified challenges. Built to feel like a real game, not a boring tutorial.
      </p>
      <button className="primary" onClick={() => window.location.href='/course/python'}>
        Start Learning
      </button>
    </div>
  );
}
