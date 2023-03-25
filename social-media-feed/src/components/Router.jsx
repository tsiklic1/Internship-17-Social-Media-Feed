import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FeedPage from "../pages/FeedPage";
import HeaderPage from "../pages/HeaderPage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "./Layout";
import PostPage from "../pages/PostPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<HeaderPage />} />
        <Route path={`/feed`}>
          <Route index element={<FeedPage />} />
          <Route path=":postId" element={<PostPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
