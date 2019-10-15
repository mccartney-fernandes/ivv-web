import React, { useState, useEffect } from "react";
import Routes from "./routes";
import autentication from "./services/auth";
import Spinner from "./components/Spinner";

export default function App() {
  const [reload, setReload] = useState(false);
  useEffect(() => {
    autentication(
      process.env.REACT_APP_EMAIL,
      process.env.REACT_APP_PASSWORD
    ).then(rel => {
      setReload(!!rel);
    });
  }, []);

  return reload ? <Routes /> : <Spinner />;
}
