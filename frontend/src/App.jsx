import ASidebar from "./components/ASidebar";
import ANavbar from "./components/ANavbar";
import AFooter from "./components/AFooter";
import { useUser } from "./provider/UserProvider";
function App() {
  const { newUser } = useUser();
  return (
    <>
      <div className="flex flex-col h-screen">
        {newUser ? <ASidebar /> : <ANavbar />}
        {/* Inhaltsbereich, der den verbleibenden Raum einnimmt */}
        <div className="flex-grow overflow-auto">
          {/* Hier können Sie Ihren Hauptinhalt einfügen */}
          <p>Main content goes here. Adjust this area based on your needs.</p>
        </div>
        {!newUser && <AFooter />}
      </div>
    </>
  );
}

export default App;
