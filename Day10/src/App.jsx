import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Courses } from "./pages/Courses.jsx";
import { CourseDetail } from "./pages/CourseDetail.jsx";
import { About } from "./pages/About.jsx";
import { Product } from "./pages/Product.jsx";
import { Notfound } from "./pages/Notfound.jsx";
import { Men } from "./pages/Men.jsx";
import { Women } from "./pages/Women.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id/" element={<CourseDetail />} />
          <Route path="/product" element={<Product />}>
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
