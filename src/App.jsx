import { BrowserRouter, Route, Routes } from "react-router-dom"
// Global CSS
import "./globalCSS.css"
// Components
import Footer from "./components/Footer"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Kids from "./pages/Kids"
import Men from "./pages/Men"
import Product from "./pages/Product"
import Women from "./pages/Women"
import Shop from "./pages/shop"
// Page routes

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/product" element={<Product />}>
            <Route path=':id' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
