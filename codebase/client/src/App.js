import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  FormView,
  IndexView,
  SigninBusinessView,
  SigninStudentView,
  CopyApi,
} from "./views";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="/form" element={<FormView />} />
        <Route path="/signin-business" element={<SigninBusinessView />} />
        <Route path="/signin-student" element={<SigninStudentView />} />
        <Route path="/copyapi" element={<CopyApi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
