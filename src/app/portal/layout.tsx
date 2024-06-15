import { PortalBanner } from "@/components/portal/banner"
import { PropsWithChildren } from "react"

const PortalLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col md:h-screen">
        <PortalBanner/>
       <div className="container flex justify-center flex-1 h-0 mt-12">
           {children}
       </div>
    </div>
  )
}

export default PortalLayout