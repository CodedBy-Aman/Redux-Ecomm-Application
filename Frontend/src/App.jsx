import { useEffect } from "react";
import MainRoutes from "./routes/MainRoutes";
import Nav from "./components/Nav";

const App = () => {

  useEffect(() => {
   
  }, []);

  return (
    <div className="w-screen h-screen ">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
