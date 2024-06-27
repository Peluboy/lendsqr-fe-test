import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import UsersDashboard from "./Containers/UsersDashboard/UsersDashboard";
import Login from "./Containers/Login/Login";
import Scrollbars from "react-custom-scrollbars-2";

const App: React.FC<any> = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/" />

      <Route
        element={
          <RequireAuth>
            <UsersDashboard />
          </RequireAuth>
        }
        path="/dashboard/users"
      />

      <Route
        element={
          <RequireAuth>
            <Scrollbars
              style={{ width: "100%", height: "100vh" }}>
            <Layout></Layout>
            </Scrollbars>
          </RequireAuth>
        }
        path="*"
      />
    </Routes>
  );
};

export default App;
