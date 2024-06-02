import { SIDE_BAR_MENU } from "@/constants/menu"
import { LogOutIcon, MenuIcon, MonitorSmartphoneIcon } from "lucide-react"
import Link from "next/link"
import DomainMenu from "./domain-menu"
import MenuItem from "./menu-item"

type Props = {
    onExpand: () => void
    current: string
    onSignOut: () => void
    domains: | {
        id: string
        name: string
        icon: string | null
    }[] | null | undefined
}

const MaxMenu = ({ current, domains, onExpand, onSignOut }: Props) => {
  return (
    <div className="py-3 px-4 flex flex-col h-full">
       <div className="flex justify-between items-center">
        <Link href={'/'} className="flex items-center animate-fade-in opacity-0 delay-300 fill-mode-forwards">
         <img src="/images/logo.png" alt="logo" width={60} height={60}/>
         <h3 className="font-bold text-2xl text-iridium dark:text-neutral-300">Talk Meow</h3>
        </Link>
        <MenuIcon className="cursor-pointer animate-fade-in opacity-0 delay-300 fill-mode-forwards" onClick={onExpand}/>
       </div>

       <div className="animate-fade-in opacity-0 delay-300 fill-mode-forwards flex flex-col justify-between">
          <div className="flex flex-col">
             <p className="text-xs text-gray-500 my-3">MENU</p>
             {SIDE_BAR_MENU.map((menu, key) => (
                <MenuItem size='max' {...menu} key={key} current={current}/>
             ))}
             <DomainMenu domains={domains}/>
          </div>
          <div className="flex flex-col">
             <p className="text-xs text-gray-500 my-3">OPTIONS</p>
             <MenuItem size="max" label="Sign out" icon={<LogOutIcon/>} onSignOut={onSignOut}/>
             <MenuItem size="max" label="Mobile App" icon={<MonitorSmartphoneIcon/>}/>
          </div>
       </div>
    </div>
  )
}

export default MaxMenu