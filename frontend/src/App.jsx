import ASidebar from "./components/ASidebar";
import ANavbar from "./components/ANavbar";
import AFooter from "./components/AFooter";
import { useUser } from "./provider/UserProvider";
import LoggedOutScreen from "./components/loggedOutScreen/LoggedOutScreen";
import TaskScreen from "./components/taskScreen/TaskScreen";
import { Routes, Route, Navigate } from "react-router-dom";
import Privacy from "../src/components/Privacy.jsx";

function App() {
  const { user } = useUser();

  return (
    <div className={user ? "flex flex-row h-screen" : "flex flex-col h-screen"}>
      {!user ? <ANavbar /> : <ASidebar />}
      <div className="flex-grow overflow-auto">
        <Routes>
          <Route
            path="/"
            element={!user ? <LoggedOutScreen /> : <Navigate to="/todo" />}
          />
          <Route
            path="/todo"
            element={user ? <TaskScreen /> : <Navigate to="/" />}
          />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
      {!user && <AFooter />}
    </div>
  );
}

export default App;
