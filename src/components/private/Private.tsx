import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../router/router.config";
import RouteWithNotFound from "../../utils/RouteWithNotFound.utility";
import { lazy } from "react";

const Profile = lazy(() => import("./Profile/Profile"));

function Private() {
  return (
    <RouteWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Profile />} />
    </RouteWithNotFound>
  );
}
export default Private;
