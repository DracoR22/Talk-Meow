import { cn, extractUUIDFromString, getMonthName } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { User } from "lucide-react"
import Link from "next/link"

type Props = {
    message: {
        role: 'assistant' | 'user'
        content: string
        link?: string
    }
    createdAt?: Date
}

const Bubble = ({ message, createdAt }: Props) => {

    let d = new Date()

    const image = extractUUIDFromString(message.content)

  return (
    <div className={cn('flex gap-2 items-end', message.role === 'assistant' ? 'self-start' : 'self-end flex-row-reverse')}>
        {message.role === 'assistant' ? (
            <Avatar className="w-5 h-5">
               <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
               <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        ) : (
            <Avatar className="w-5 h-5">
               <AvatarFallback>
                 <User/>
               </AvatarFallback>
            </Avatar>
        )}
        <div className={cn('flex flex-col gap-3 min-w-[200px] max-w-[300px] p-4 rounded-t-md', 
            message.role === 'assistant' ? 'bg-muted rounded-r-md' : 'bg-black text-white rounded-l-md'
        )}>
           {createdAt ? (
            <div className="flex gap-2 text-xs text-gray-500">
               <p>
                {createdAt.getDate()} {getMonthName(createdAt.getMonth())} 
               </p>
               <p>
                {createdAt.getHours()} {getMonthName(createdAt.getMinutes())}
                {createdAt.getHours() > 12 ? 'PM' : 'AM'}
               </p>
            </div>
           ) : (
            <p className="text-xs">
               {`${d.getHours()}:${d.getMinutes()} ${d.getHours() > 12 ? 'pm' : 'am' }`}
            </p>
           )}
           {image ? (
            <div className="relative aspect-square">
                <img src={`https://ucarecdn.com/${image[0]}`} className="w-full h-full"/>
            </div>
           ) : ( 
            <p className="text-sm">
                {message.content.replace('(complete)', '')}
                {message.link && (
                    <Link className="underline font-bold pl-2" href={message.link} target="_blank">
                        Your Link
                    </Link>
                )}
            </p>
           )}
        </div>
    </div>
  )
}

export default Bubble