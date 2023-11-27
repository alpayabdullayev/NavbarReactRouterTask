import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout";
import "./assets/scss/main.scss";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={"/gallery"} element={<Galery />} />
            <Route path={"/shortcodes"} element={<Shortcodes />} />
            <Route path={"/languages"} element={<Languages />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/about/markup" element={<Markup />} />
            <Route path="/about/contact" element={<AboutContact />} />
            <Route path="/about/image" element={<AboutImage />} />
            <Route path="/about/float" element={<AboutFloat />} />
            <Route path="/about/comments" element={<AboutComments />} />
            <Route path="/about/commentsdisabled" element={<AboutCommentDisabled />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
