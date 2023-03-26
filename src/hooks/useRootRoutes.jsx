import { useRoutes } from "react-router-dom";
import { PATHS } from "@src/constants";
import { AuthLayout, MainLayout } from "@src/layouts";

import Login from "@src/pages/login";
import Register from "@src/pages/register";
import Verification from "@src/pages/verification";
import Home from "@src/pages/home";

const useRootRoutes = () => {
    const rootRoutes = useRoutes([
        {
            element: <AuthLayout />,
            children: [
                {
                    path: PATHS.LOGIN,
                    element: <Login />,
                },
                {
                    path: PATHS.REGISTER,
                    element: <Register />,
                },
                {
                    path: PATHS.VERIFICATION,
                    element: <Verification />,
                },
            ],
        },
        {
            element: <MainLayout />,
            children: [
                {
                    path: PATHS.HOME,
                    element: <Home />,
                },
            ],
        },
    ]);
    return rootRoutes;
};

export default useRootRoutes;
