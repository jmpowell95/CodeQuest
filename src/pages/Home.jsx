
import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'linear-gradient(to bottom, #1e1e2f, #0d1117)',
      borderRadius: '16px',
      boxShadow: '0 0 20px rgba(0,0,0,0.3)'
    }}>
      <img src="/logo.png" alt="CodeQuest Logo" style={{ height: '80px', marginBottom: '1rem' }} />
      <h1 style={{ fontSize: '3rem', fontWeight: '800' }}>Welcome to CodeQuest</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '1.5rem auto' }}>
        Your AI-powered path to mastering programming — gamified, interactive, and beautifully designed.
      </p>
      <Link to="/course/python">
        <button>Start Python Course</button>
      </Link>
    </div>
  );
}
