import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./router.config";
import { AuthGuard } from "../guards";
import RouteWithNotFound from "../utils/RouteWithNotFound.utility";
import { Provider } from "react-redux";
import store from "../global/store";
import Navbar from "../components/public/navbar/Navbar";
import PetInfo from "../components/public/pet/PetInfo";
import { AnimatePresence } from "framer-motion";

const Private = lazy(() => import("../components/private/Private"));
const Home = lazy(() => import("../components/public/home/Home"));
const Session = lazy(() => import("../components/public/login/Session"));

export const AppRouter = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<> LOADING... </>}>
      <Provider store={store}>
        <Navbar />
        <AnimatePresence mode="wait" initial={true}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Session />} />
            <Route path={PublicRoutes.SINGUP} element={<Session />} />
            <Route path={PublicRoutes.HOME} element={<Home />} />
            <Route path={`/${PublicRoutes.PET}/:id`} element={<PetInfo />} />
            <Route element={<AuthGuard />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
            <Route path="*" element={<div> NOT FOUND </div>} />
          </Routes>
        </AnimatePresence>
      </Provider>
    </Suspense>
  );
};
