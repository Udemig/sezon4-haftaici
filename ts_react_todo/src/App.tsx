import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import Header from "./components/header";
import TodoTypePage from "./pages/todo-type-page";
import TodoClassPage from "./pages/todo-class-page";

function App() {
  return (
    <BrowserRouter>
      <div className="container py-3">
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="todo-type" element={<TodoTypePage />} />
          <Route path="todo-class" element={<TodoClassPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
