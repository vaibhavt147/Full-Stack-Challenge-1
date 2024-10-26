import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LongestSubstring from "./pages/LongestSubstring";
import BinaryTree from "./pages/BinaryTree";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavBar";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/longestSubstring" element={<LongestSubstring />} />
        <Route path="/binaryTree" element={<BinaryTree />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
