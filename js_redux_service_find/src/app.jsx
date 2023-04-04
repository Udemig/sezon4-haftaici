import { useEffect, useState } from "react";
import { Button, useAccordionButton } from "react-bootstrap";
import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./pages/main-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/category-page";
import CategoryDetailsPage from "./pages/category-details-page";
import { useDispatch, useSelector } from "react-redux";
import useApi from "./hooks/useApi";
import { SET_CATEGORIES, setCategoryAction } from "./redux/categoryReducer";

function App() {
  const categoryState = useSelector((state) => state.categoryState);
  const api = useApi();
  const dispatch = useDispatch();

  console.log(">> categoryState", categoryState);

  console.log(`örnek yazı

aergaerg
aergaergaergaerg
-----------
falan filan
///////////////////
test
..........................
`);

  useEffect(() => {
    api
      .get(
        "https://api.adoptez1artisan.com/public/categories/listMainCategories"
      )
      .then((response) => {
        console.log(">> RESP", response);
        /**
         * Örnek çıktı:
         *
         * >> RESP {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}
         */

        /**
         * Birşeyi dispatch etmek için iki yöntem vardır. Birinci yöntem action fonksiyonunu çağırmaktır.
         * İkinci yöntem ise action objesini manuel olarak oluşturmaktır.
         */

        // birinci yöntem: action fonksiyonunu çağırarak dispatch yapmak
        dispatch(setCategoryAction(response.data.data));

        // ikinci yöntem: action objesini kendimiz oluşturmak
        dispatch({
          type: SET_CATEGORIES,
          payload: response.data.data,
        });
      })
      .catch((err) => {
        console.err(">> ERR", err);
      });
  }, []);

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

        <pre>{`örnek
yazı
buraya
merhaba
dünya
-------------
falan
filan
////////////////
merhaba
Fixed width fonk kullanılarak bu bölge ekranda gösterilir.


`}</pre>

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
