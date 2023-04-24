import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/Layout";
import InfoPersonal, { action as actionInfoPersonal } from "../pages/personal-info/InfoPersonal";
import CustomPlan from "../pages/custom-plan/CustomPlan";
import SelectPlan from "../pages/select-plan/SelectPlan"
import Summary from "../pages/total-pagar/Summary";
import { useSelector } from "react-redux"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <InfoPersonal />,
                action: actionInfoPersonal

            },
            {
                path: '/plan',
                element: <SelectPlan />
            },
            {
                path: '/custom-plan',
                element: <CustomPlan />
            },
            {
                path: '/total-pagar',
                element: <Summary />
            }
        ]
    }
])
export default router