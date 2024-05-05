/* in main layout whatever the page we are on the content comes from by using Outlet like in laravel we use @yield('content') */
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import NavBar from "../components/Navbar";
export default function MainLayout() {
  return (
    <>
      {/* Navbar will be shown on all the pages just like laravel */}
      <NavBar />
      <Outlet />
      <ToastContainer />
    </>
  );
}
