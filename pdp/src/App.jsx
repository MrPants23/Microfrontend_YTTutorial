import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// const Header = React.lazy(() => import("home/Header"));
// const Footer = React.lazy(() => import("home/Footer"));
import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

const App = () => {
  return (
    <Router>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        {/* <Suspense fallback={<div>Loading...</div>}> Part of */}
        <SafeComponent>
          <Header />
        </SafeComponent>
        {/* </Suspense> */}
        <div className="my-10">
          <Routes>
            <Route path="/product/:id" element={<PDPContent />} />
          </Routes>
        </div>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Footer />
        {/* </Suspense> */}
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));