import React from "react";
import { useRootRoutes } from "@src/hooks";

const App = () => {
    const rootRoutes = useRootRoutes();
    return <>{rootRoutes}</>;
};

export default App;
