import { createUser } from "@/redux/slices/user.slice";
import { Layout } from "@/styled-components"
import { create } from "domain";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { HomeTitle } from "./styled-components"
import {CreateHomeButton, ModifyHomeButton, ResetHomeButton} from "./components"




export default function Home() {
  
  const dispatch = useDispatch();
  

  
  return (
    <Layout>
      <CreateHomeButton/>
      <ModifyHomeButton/>
      <ResetHomeButton/>
      <HomeTitle>
      HomePages
      </HomeTitle>
      </Layout>
  )
}