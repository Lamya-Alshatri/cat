import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Switch,
  Route
 } from "react-router-dom";
import CatImages from "./Components/CatImages";

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/A" element={<App />}>
        <Route path="/A/cats/:catId" element={<CatImages />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
