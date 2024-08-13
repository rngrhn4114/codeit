import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import CoursePage from "./pages/CoursePage";
import WishlistPage from "./pages/WishlistPage";
import QuestionListPage from "./pages/QuestionListPage";
import QuestionPage from "./pages/QuestionPage";
import NotFoundPage from "./pages/NotFoundPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="courses" element={<CourseListPage />} />
          <Route
            path="courses/react-frontend-development"
            element={<CoursePage />}
          />
          <Route path="questions">
            <Route index element={<QuestionListPage />} />
            <Route pathe="616825" element={<QuestionPage />} />
          </Route>
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
