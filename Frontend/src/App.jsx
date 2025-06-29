import MainRoutes from "./routes/MainRoutes";
import Nav from "./components/Nav";
import { useEffect } from "react";
import { asyncGetCurrentUser } from "./features/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadProduct } from "./features/actions/productAction";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

  useEffect(() => {
    dispatch(asyncGetCurrentUser());
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    dispatch(asyncLoadProduct());
  }, [dispatch]);

  return (
    <div className="w-screen h-screen overflow-auto ">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
