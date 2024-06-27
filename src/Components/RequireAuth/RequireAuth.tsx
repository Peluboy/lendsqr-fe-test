import { Navigate, useLocation } from "react-router-dom";

type RequireAuthProps = {
  children?: React.ReactNode;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
  // Router and Params
  const location = useLocation();

  return (
    <>
      {localStorage.getItem("user") ? (
        children
      ) : (
        <Navigate to="/" state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
