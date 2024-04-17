import { Routes, Route, BrowserRouter } from "@nodemodule/react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Header from "./Header/Header";
import HistoryPage from "../pages/HistoryPage/HistoryPage";
import GalleryPage from "../pages/GalleryPage/GalleryPage";

export default function Layout() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          ></Route>
          <Route
            path="/history"
            element={<HistoryPage />}
          ></Route>
          <Route
            path="/image"
            element={<GalleryPage/>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
