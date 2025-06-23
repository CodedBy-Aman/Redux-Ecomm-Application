
import MainRoutes from "./routes/MainRoutes";
import Nav from "./components/Nav";
import { useEffect } from "react";
import { asyncGetCurrentUser } from "./features/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
const dispatch = useDispatch();
const isLoggedIn = useSelector((state) => state.users.isLoggedIn)

useEffect(() =>{
  dispatch(asyncGetCurrentUser())
},[isLoggedIn])

  return (
    <div className="w-screen h-screen ">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
