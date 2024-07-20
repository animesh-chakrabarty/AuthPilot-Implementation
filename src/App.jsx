import { Routes, Route } from "react-router-dom";
// importing components
import HomePage from "./pages/HomePage";
import AppPage from "./pages/AppPage";
// RTK
import { setUserCredentials } from "./features/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userCredentials = JSON.parse(
      localStorage.getItem("savvy-user-credentials")
    );
    userCredentials && dispatch(setUserCredentials(userCredentials));
  }, []);

  return (
    <main className="h-[100vh]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
    </main>
  );
}

export default App;
