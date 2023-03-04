import { Layout } from "@/styled-components"
import { HomeTitle } from "./styled-components"
import {CreateHomeButton, ModifyHomeButton, ResetHomeButton} from "./components"

export default function Home() {
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