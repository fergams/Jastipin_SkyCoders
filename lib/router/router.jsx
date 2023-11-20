import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/client/Layout/Layout";
import { default as ProLayout } from "../../components/pro/Layout";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import MoreArticle from "../../pages/MoreArticle";
import MoreDesign from "../../pages/MoreDesign";
import MorePro from "../../pages/MorePro";
import Dashboard from "../../pages/pro/Dashboard";
import Landing from "../../pages/pro/Landing";
import SignIn from "../../pages/pro/SignIn";
import SignUp from "../../pages/pro/SignUp/SignUp";
import ReadArticle from "../../pages/ReadArticle";
import ReadDesign from "../../pages/ReadDesign";
import ReadPro from "../../pages/ReadPro";
import RegisterPage from "../../pages/RegisterPage";
import SesudahLoginPage from "../../pages/SesudahLoginPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "morearticle",
        element: <MoreArticle />,
      },
      {
        path: "moredesign",
        element: <MoreDesign />,
      },
      {
        path: "morepro",
        element: <MorePro />,
      },
      {
        path: "readarticle",
        element: <ReadArticle />,
      },
      {
        path: "readdesign",
        element: <ReadDesign />,
      },
      {
        path: "readpro",
        element: <ReadPro />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "sesudah-login",
        element: <SesudahLoginPage />,
      },
    ],
  },
  {
    path: "/pro",
    element: <ProLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
