// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import "./assets/scss/main.scss";
import Home from "./pages/Home";
import Galery from "./pages/Galery";
import Shortcodes from "./pages/Shortcodes";
import Languages from "./pages/Languages";
import About from "./pages/About";
import Markup from "./pages/Markup";
import AboutContact from "./pages/AboutContact/idnex";
import { AboutImage } from "./pages/AboutImage";
import AboutFloat from "./pages/AboutFloats";
import AboutComments from "./pages/AboutComments";
import AboutCommentDisabled from "./pages/AboutCommentsDisabled/idnex";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>

<BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about/*" element={<About />}>
              <Route path="markup" element={<Markup />} />
              <Route path="contact" element={<AboutContact />} />
              <Route path="image" element={<AboutImage />} />
              <Route path="float" element={<AboutFloat />} />
              <Route path="comments" element={<AboutComments />} />
              <Route path="commentsdisabled" element={<AboutCommentDisabled />} />
            </Route>
            <Route path="gallery" element={<Galery />} />
            <Route path="shortcodes" element={<Shortcodes />} />
            <Route path="languages" element={<Languages />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
