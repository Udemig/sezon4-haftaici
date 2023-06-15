import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import Header from "./components/header";
import TodoTypePage from "./pages/todo-type-page";
import TodoClassPage from "./pages/todo-class-page";
import JHolderPage from "./pages/jholder-page";
import JHolderUserDetailPage from "./pages/jholder-user-detail-page";
import JHolderPostDetailPage from "./pages/jholder-post-detail-page";
import JHolderAlbumDetailPage from "./pages/jholder-album-detail-page";

function App() {
  return (
    <BrowserRouter>
      <div className="container py-3">
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="todo-type" element={<TodoTypePage />} />
          <Route path="todo-class" element={<TodoClassPage />} />

          {/*
jsonplaceholder api'sini kullanacağımız sayfaların route'ları:

/jholder/
/jholder/user/:userId
/jholder/user/:userId/post/:postId
/jholder/user/:userId/album/:albumId
*/}

          <Route path="jholder">
            <Route index element={<JHolderPage />} />

            <Route path="user/:userId">
              <Route index element={<JHolderUserDetailPage />} />

              <Route path="post/:postId" element={<JHolderPostDetailPage />} />

              <Route
                path="album/:albumId"
                element={<JHolderAlbumDetailPage />}
              />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
