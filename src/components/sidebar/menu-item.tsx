import { cn } from "@/lib/utils"
import Link from "next/link"

type Props = {
    size: 'max' | 'min'
    label: string
    icon: JSX.Element
    path?: string
    current?: string
    onSignOut?: () => void
}

const MenuItem = ({ icon, label, size, current, onSignOut, path }: Props) => {

    switch(size) {
       case 'max':
         return (
            <Link href={path ? `/${path}` : '#'} onClick={onSignOut} className={cn('flex items-center gap-2 px-1 py-2 rounded-lg my-1',
                !current ? 'text-gray-500 dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-700' : current === path ? 'bg-white font-bold text-black' : 'text-gray-500 hover:bg-white dark:text-neutral-300 dark:hover:bg-neutral-700'
            )}>
               {icon} {label}
            </Link>
         )
        
       case 'min':
         return (
            <Link href={path ? `/${path}` : '#'} onClick={onSignOut} className={cn(!current ? 'text-gray-500 dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-700' : current === path ? 'bg-white font-bold text-black' : 'text-gray-500 hover:bg-white dark:text-neutral-300 dark:hover:bg-neutral-700', 'rounded-lg py-2 my-1'
            )}>
                {icon}
            </Link>
        )

        default:
            return null
    }
}

export default MenuItem