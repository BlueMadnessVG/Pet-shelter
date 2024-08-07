import { useSelector } from "react-redux";
import { AppStore } from "../global/store";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../router/router.config";

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.id ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.HOME} />
  );
};

export default AuthGuard;
