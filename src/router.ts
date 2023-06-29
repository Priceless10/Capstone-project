import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "./components/Authentication";
import { Home } from "./components/Home";


import { AuthLayout } from "./pages/AuthenticationPage";
import { FeedPersonalizedData } from "./components/FeedPersonalizedData";
import { HomeComponent } from "./components/HomeComponent";
import { MarkdownLayout } from "./pages/MarkdownLayout";


export const router = createBrowserRouter([

  {
    path: "/",
    Component: HomeComponent,
  },

  {
    path: "/signin",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Register,
  },
  {
    path: "/feed-interest",
    Component: FeedPersonalizedData
  },
  {
    path: "/edit-new-post",
    Component: MarkdownLayout
  }

]);

