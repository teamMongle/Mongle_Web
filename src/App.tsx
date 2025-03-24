import { Routes, Route } from "react-router-dom";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import FoundationDemo from "@designsystem/demo/FoundationDemo";

function App() {
  return (
    <Routes>
      <Route path={""} element={<HomePage />} />
      <Route path={"login"} element={<LoginPage />} />
      <Route path={"design-system/foundation"} element={<FoundationDemo />} />
    </Routes>
  );
}

export default App;
