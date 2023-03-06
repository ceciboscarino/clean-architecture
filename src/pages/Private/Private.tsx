import { PrivateRoutes } from "@/models"
import { Navigate, Route } from "react-router-dom"
import { lazy } from "react"
import RoutesWithNotFound from './../../Utilities/routes-with-not-found';



const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Home = lazy(() => import('./Home/Home'));



function Private() {
  return (
    <RoutesWithNotFound>

      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />


    </RoutesWithNotFound>
  )
}
export default Private;  
