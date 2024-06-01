import { onLoginUser } from "@/actions/auth"
import { PropsWithChildren } from "react"

const DashboardLayout = async ({ children }: PropsWithChildren) => {

    const authenticated = await onLoginUser()

    if (!authenticated) return null

  return (
    <div>
      
    </div>
  )
}

export default DashboardLayout
