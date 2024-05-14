import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { PrivateMap } from "./Navigation/PrivateMap";
import { Login } from "./components/Admin/Login/Login";
import { AppRoutes } from "./Navigation/AppRoutes";

function App() {
  return (
    <div>
      <AppRoutes/>
    </div>
  );
}

export default App;
