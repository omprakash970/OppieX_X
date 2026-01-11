import { Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/Home/HomePage";
import SignUp from "./landing_page/SingUp/Singup";
import AboutPage from "./landing_page/About/AboutPage";
import PricingPage from "./landing_page/Pricing/PricingPage";
import Support from "./landing_page/Support/Support";
import ProductsPage from "./landing_page/Products/ProductsPage";
import NavBar from "./landing_page/Home/NavBar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<Support />} />
    <Route path="/*" element={<NotFound /> } />
    </Routes>
    <Footer />
    </>
  );

}

export default App;
