import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow-md py-4 mb-6">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">CodeQuest</Link>
        <nav className="space-x-4">
          <Link to="/leaderboard" className="text-gray-600 hover:text-primary">Leaderboard</Link>
          <Link to="/profile" className="text-gray-600 hover:text-primary">Profile</Link>
          <Link to="/login" className="text-gray-600 hover:text-primary">Login</Link>
        </nav>
      </div>
    </header>
  );
}
