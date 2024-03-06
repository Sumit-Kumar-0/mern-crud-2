import { Route, Routes } from "react-router-dom";
import AddUser from "./pages/AddUser";
import AllUser from "./pages/AllUser";
import NotFound from "./pages/NotFound";
import SingleUser from "./pages/SingleUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user/all" element={<AllUser />} />
        <Route path="/" element={<AllUser />} />
        <Route path="/user/new" element={<AddUser />} />
        <Route path="/user/:id" element={<SingleUser />} />
        <Route path="/user/edit/:id" element={< EditUser/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
