import { Routes, Route, Link } from "react-router-dom";
import RequireUser from "./Authentication/RequireUser";
import Messenger from "./Pages/Messenger/Messenger";

function App() {
  return (
    <Routes>
      <Route element={<RequireUser />}>
        <Route path="/messenger" element={<Messenger />} />
      </Route>
    </Routes>
  );
}

export default App;
