/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Cookies from "js-cookie";
import Routes from "./Routes";
import "./App.css";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [auth, setAuth] = useState(false);

  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes />
    </Router>
  );
}

export default App;
