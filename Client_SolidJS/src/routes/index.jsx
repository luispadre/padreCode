import { Router, useRoutes, Link } from "solid-app-router";

import Layout from '../layout'
import { routes } from "./DataRoute";
export default function () {
    const Routes = useRoutes(routes);
    return (<>
        <Router>
            <Layout>
                <Routes>
                </Routes>
            </Layout>
        </Router>
    </>
    )
}