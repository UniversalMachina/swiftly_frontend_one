import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useNavigationEffect from "./hooks/useNavigationEffect"; // Ensure this path matches the location of your custom hook

import Settings from "./pages/protected/Settings";
import Home from "./pages/public/Home";
import About_us from "./pages/public/About_us";
import Features from "./pages/public/Features";
import Services from "./pages/public/Services";
import Contact_us from "./pages/public/Contact_us";
import Pricing from "./pages/public/Pricing";
import Faqs from "./pages/public/Faqs";
import Chatbot_Interaction_Page from "./pages/protected/chatbot/Chatbot_Interaction_Page";
import Chatbot_Testing_Page from "./pages/protected/Chatbot_Testing_Page";
import Profile from "./pages/protected/Profile";

import Navbar from "./components/public/Navbar";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import ChatbotEditor from "./pages/protected/chatbot/ChatbotEditor";

import Dashboard from './pages/protected/Dashboard';
import AI_Agents from './pages/protected/AI_Agents';
import MyAI_Agents from './pages/protected/MyAI_Agents';
import CreateAI_Agent from './pages/protected/CreateAI_Agent';
import Account from './pages/protected/Account';
import Agency from './pages/protected/Agency';
import SubAccounts from './pages/protected/SubAccounts';
import WhiteLabelAPI from './pages/protected/WhiteLabelAPI';
import Marketplace from './pages/protected/Marketplace';
import Help from './pages/protected/Help';

function App() {
  // Invoke the custom hook to handle side effects on navigation
  useNavigationEffect();

  const location = useLocation(); // Get the current location
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const handleLogin = (status, username) => {
    setLoggedIn(status);
    setUsername(username); // Set the username
    localStorage.setItem("isLoggedIn", status.toString());
    localStorage.setItem("username", username); // Store the username in localStorage
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    setUsername(""); // Clear the username
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username"); // Remove the username from localStorage
  };

  const navbarRoutes = [
    "/",
    "/about-us",
    "/features",
    "/services",
    "/contact-us",
    "/pricing",
    "/faqs",
  ];

  return (
    <>
      {navbarRoutes.includes(location.pathname) && (
        <Navbar isLoggedIn={isLoggedIn} onSignOut={handleSignOut} />
      )}
      <Routes>
        <Route path="/settings" element={<Settings username={username} setUsername={setUsername} onSignOut={handleSignOut}/>} />
        <Route path="/profile" element={<Profile username={username} onSignOut={handleSignOut}/>} />

        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onLogin={handleLogin} />} />
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<About_us/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact-us" element={<Contact_us/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/chatbot-interaction-page" element={<Chatbot_Interaction_Page username={username} onSignOut={handleSignOut}/>}/>
        <Route path="/chatbot-testing-page" element={<Chatbot_Testing_Page username={username} onSignOut={handleSignOut}/>}/>
        <Route path="/chatbots/new" element={<ChatbotEditor username={username} />} />
        <Route path="/chatbots/:chatbotId/edit" element={<ChatbotEditor username={username} />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai-agents" element={<AI_Agents />} />
        <Route path="/ai-agents/my" element={<MyAI_Agents />} />
        <Route path="/ai-agents/create" element={<CreateAI_Agent />} />
        <Route path="/account" element={<Account />} />
        <Route path="/white-label-api" element={<WhiteLabelAPI />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
