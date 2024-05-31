import { onLoginUser } from "@/actions/auth"
import { PropsWithChildren } from "react"

const DashboardLayout = async ({ children }: PropsWithChildren) => {

    const authenticated = await onLoginUser()

  return (
    <div>
      
    </div>
  )
}

export default DashboardLayout
