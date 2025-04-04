import { BrowserRouter, Routes, Route} from "react-router-dom";
import PHome from "./pages/PHome/PHome";
import PLogin from "./pages/PLogin/PLogin";
import { APP_ROUTES } from "./appConfig";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={APP_ROUTES.ROUTE_HOME} element={<PHome/>} />
            <Route path={APP_ROUTES.ROUTE_LOGIN} element={<PLogin/>} />
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;