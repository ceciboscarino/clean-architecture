import { PrivateRoutes } from "@/models"
import { Navigate, Route } from "react-router-dom"
import  Home  from "../home/Home"

function Dashboard() {
  return (
   <>
   
   <Route path="/" element={<Navigate to= {PrivateRoutes.DASHBOARD}/>}/>
   <Route path= {PrivateRoutes.DASHBOARD} element={<Dashboard/>}/>
   <Route path= {PrivateRoutes.HOME} element={<Home/>}/>


   </>
  )
}
export default Dashboard