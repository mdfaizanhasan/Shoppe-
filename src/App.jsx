// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "/login",
    element: (<LoginPage />),
  },
  {
    path: "/signup",
    element: (<SignupPage />),
  },
]);
function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
