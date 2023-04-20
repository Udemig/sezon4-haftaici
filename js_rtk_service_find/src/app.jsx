import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import Header from "./components/header";
import Footer from "./components/footer";

import LoginPage from "./pages/auth/login-page";
import RegisterPage from "./pages/auth/register-page";

import useApi from "./hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "./redux/categorySlice";

function App() {
  const api = useApi();
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.categoryState);

  console.log(">> APP categoryState", categoryState);

  useEffect(() => {
    async function execute() {
      console.log("Kategori listesi alınıyor.");

      const promises = [];

      promises.push(
        api.get(
          "https://api.adoptez1artisan.com/public/categories/listMainCategories?foo=1"
        )
      );
      promises.push(
        api.get(
          "https://api.adoptez1artisan.com/public/categories/listMainCategories?foo=2"
        )
      );
      promises.push(
        api.get(
          "https://api.adoptez1artisan.com/public/categories/listMainCategories?foo=3"
        )
      );
      promises.push(
        api.get(
          "https://api.adoptez1artisan.com/public/categories/listMainCategories?foo=4"
        )
      );
      promises.push(
        api.get(
          "https://api.adoptez1artisan.com/public/categories/listMainCategories?foo=5"
        )
      );

      // Örnek olması amacıyla buraya eklenmiştir.
      const responses = await Promise.all(promises);
      console.log(">> RESPONSES", responses);

      const response = await api.get(
        "https://api.adoptez1artisan.com/public/categories/listMainCategories"
      );

      console.log("Kategori listesi geldi, dispatch yapılıyor.");
      dispatch(setCategories(response.data.data));

      // `await` yazdığımız için then ve catch fonksiyonlarına gerek kalmadı
      //.then((response) => {
      //  console.log("Kategori listesi geldi, dispatch yapılıyor.");
      //  dispatch(setCategories(response.data.data));
      //})
      //.catch((err) => {});

      console.log("Api isteği gönderildi.");
    }
    execute();
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<MainPage />} />
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
