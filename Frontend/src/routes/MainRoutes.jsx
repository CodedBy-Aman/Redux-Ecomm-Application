import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetail from "../pages/ProductDetail";
import UserProfile from "../pages/users/UserProfile";
import AuthWrapper from "../Wrapper/AuthWrapper";
import AdminWrapper from "../Wrapper/AdminWrapper";
import GuestWrapper from "../Wrapper/GuestWrapper";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route
        path="/login"
        element={
          <GuestWrapper>
            <Login />
          </GuestWrapper>
        }
      />
      <Route
        path="/register"
        element={
          <GuestWrapper>
            <Register />
          </GuestWrapper>
        }
      />

      <Route
        path="/user-profile"
        element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper>
        }
      />

      <Route
        path="/admin/create-product"
        element={
          <AdminWrapper>
            <CreateProduct />
          </AdminWrapper>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
