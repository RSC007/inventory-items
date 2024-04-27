import "./App.css";
import { Lists, MyNav, Home } from "./components";
import { Routes, Route } from "react-router-dom";
import DeletedList from "./components/DeletedList";

function App() {
  return (
    <div>
      <MyNav expand="sm" />
      <div className="App">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/deleted-lists" element={<DeletedList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
