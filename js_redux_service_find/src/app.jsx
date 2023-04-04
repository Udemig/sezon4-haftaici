import { useState } from "react";
import { Button } from "react-bootstrap";
import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./pages/main-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/category-page";
import CategoryDetailsPage from "./pages/category-details-page";
import { useSelector } from "react-redux";

function App() {
  const categoryState = useSelector((state) => state.categoryState);

  console.log(">> categoryState", categoryState);
  // Çıktı:
  // >> categoryState {categories: []}

  return (
    <BrowserRouter>
      <div className="container py-3">
        <Header />

        <Routes>
          <Route index element={<MainPage />} />

          <Route path="category">
            <Route index element={<CategoryPage />} />

            <Route path="details">
              <Route path=":slug" element={<CategoryDetailsPage />} />
            </Route>
          </Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

/**
 * Kebab Case örneği:
 * bu-ornek-bir-kebab-case-yazilisidir
 *
 * Pascal Case örneği:
 * BuOrnekBirPascalCaseYazilisidir
 *
 *
 *
 */
