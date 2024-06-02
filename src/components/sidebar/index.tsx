'use client'

import useSideBar from "@/hooks/sidebar/use-sidebar"
import { cn } from "@/lib/utils"
import MaxMenu from "./max-menu"
import { MinMenu } from "./min-menu"

type Props = {
    domains: | {
        id: string
        name: string
        icon: string
    }[] | null | undefined
}

const SideBar = ({ domains }: Props) => {

    const { expand, onExpand, page, onSignOut } = useSideBar()

  return (
    <div className={cn('bg-cream dark:bg-neutral-800 h-full w-[60px] fill-mode-forwards fixed md:relative',
        expand === undefined && '',
        expand === true ? 'animate-open-sidebar' : expand === false && 'animate-close-sidebar'
    )}>
        {expand ? (
            <MaxMenu domains={domains} current={page!} onExpand={onExpand} onSignOut={onSignOut}/>
        ) : (
            <MinMenu domains={domains} onShrink={onExpand} current={page!} onSignOut={onSignOut}/>
        )}
    </div>
  )
}

export default SideBar