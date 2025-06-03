import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">Welcome to CodeQuest</h1>
      <p className="text-lg text-gray-600 mb-6">
        Master programming with interactive lessons, real-time AI feedback, and gamified challenges.
      </p>
      <Link to="/course/python" className="inline-block bg-secondary text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-purple-600 transition">
        Start Python Course
      </Link>
    </div>
  );
}
