import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import React from "react";
import "@splinetool/viewer";

import SplineBackground from "./components/SplineBackground"; 

createRoot(document.getElementById("root")!).render(
<React.StrictMode>
    <SplineBackground />
    <App />
  </React.StrictMode>
  );
