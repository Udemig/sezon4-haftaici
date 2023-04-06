import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer"
import { useContext } from "react";
import { ThemeContext } from "./components/theme-context-provider";
import MainPage from "./pages/main-page";
import ArrayIndexPage from "./pages/array-index-page";
import LoopFunctionsPage from "./pages/loop-functions-page";

function App() {
  const themeContextData = useContext(ThemeContext)

  return (
    <BrowserRouter>

      <div className="container py-3">

        <Header />

        <Routes>
          <Route index element={<MainPage />} />

          <Route path="array">
            <Route index element={<ArrayIndexPage />} />
            <Route path="loop-functions" element={<LoopFunctionsPage />} />
          </Route>

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;
