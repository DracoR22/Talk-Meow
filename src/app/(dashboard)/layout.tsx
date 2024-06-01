import { onLoginUser } from "@/actions/auth"
import SideBar from "@/components/sidebar"
import { ChatProvider } from "@/context/use-chat-context"
import { PropsWithChildren } from "react"

const DashboardLayout = async ({ children }: PropsWithChildren) => {

    const authenticated = await onLoginUser()

    if (!authenticated) return null

  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        <SideBar domains={authenticated.domain}/>
        <div className="w-full h-screen flex flex-col py-3 pr-10 pl-20 md:px-10">
           {children}
        </div>
      </div>
    </ChatProvider>
  )
}

export default DashboardLayout
