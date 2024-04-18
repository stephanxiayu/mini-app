import ASidebar from "./components/ASidebar";
import ANavbar from "./components/ANavbar";
import AFooter from "./components/AFooter";
import { useUser } from "./provider/UserProvider";
import LoggedOutScreen from "./components/loggedOutScreen/LoggedOutScreen";
import TaskScreen from "./components/taskScreen/TaskScreen";
function App() {
  const { user } = useUser();
  return (
    <div className="flex h-screen">
      {user ? <ASidebar /> : <ANavbar />}

      <div className="flex-grow overflow-auto">
        {user ? <TaskScreen /> : <LoggedOutScreen />}
      </div>

      {!user && <AFooter />}
    </div>
  );
}

export default App;
