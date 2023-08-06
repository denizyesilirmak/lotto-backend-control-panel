import React from "react";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "/node_modules/primeflex/primeflex.css";

import "primeicons/primeicons.css";

import "./App.css";

import LoginScreen from "./screens/login";

const App: React.FC = () => {
  return (
    <div className="App">
      <LoginScreen />
    </div>
  );
};

export default App;
