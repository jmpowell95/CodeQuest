
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Course } from "./pages/Course";
import { Lesson } from "./pages/Lesson";
import { Leaderboard } from "./pages/Leaderboard";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Profile } from "./pages/Profile";
import { Certificates } from "./pages/Certificates";
import { AdminDashboard } from "./pages/AdminDashboard";
import { Header } from "./components/Header";
import { UserProvider } from "./context/UserContext";
import { PrivateRoute } from "./components/PrivateRoute";

export default function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Header />
          <div className="max-w-4xl mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/course/:language" element={<PrivateRoute><Course /></PrivateRoute>} />
              <Route path="/lesson/:language/:id" element={<PrivateRoute><Lesson /></PrivateRoute>} />
              <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
              <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path="/certificates" element={<PrivateRoute><Certificates /></PrivateRoute>} />
              <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}
