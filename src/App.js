import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import OneEvent from "./pages/OneEvent";
import Partner from "./pages/Partner";
import Blog from "./pages/Blog";
import Marketplace from "./pages/Marketplace";
import Event1 from "./pages/Event1";
import Chatbot from "./pages/Chatbot";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/one-event":
        title = "";
        metaDescription = "";
        break;
      case "/partner":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
      case "/marketplace":
        title = "";
        metaDescription = "";
        break;
      case "/event":
        title = "";
        metaDescription = "";
        break;
      case "/chatbot":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/login-page1":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/one-event" element={<OneEvent />} />
      <Route path="/partner" element={<Partner />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/event" element={<Event1 />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login-page1" element={<SignIn />} />
      <Route path="/login-page" element={<SignUp />} />
    </Routes>
  );
}
export default App;
