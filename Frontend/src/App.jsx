import { useEffect } from "react";
import User from "./features/user/User";
import { asyncGetUsers } from "./app/userActions";
import { useDispatch } from "react-redux";
import MainRoutes from "./routes/MainRoutes";
import Nav from "./components/Nav";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, []);

  return (
    <div className="w-screen h-screen ">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
