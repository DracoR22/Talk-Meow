import { ChatBotMessageProps } from "@/schemas/conversation-schema";
import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import RealTime from "./real-time";

type Props = {
    errors: any
    register: UseFormRegister<ChatBotMessageProps>
    chats: { role: 'assistant' | 'user'; content: string; link?: string }[]
    onChat(): void
    onResponding: boolean
    domainName: string
    theme?: string | null
    textColor?: string | null
    help?: boolean
    realtimeMode:
      | {
          chatroom: string
          mode: boolean
        }
      | undefined
    helpdesk: {
      id: string
      question: string
      answer: string
      domainId: string | null
    }[]
    setChat: React.Dispatch<
      React.SetStateAction<
        {
          role: 'user' | 'assistant'
          content: string
          link?: string | undefined
        }[]
      >
    >
  }

const BotWindow = forwardRef<HTMLDivElement, Props>(({ register, chats, onChat, onResponding, domainName, helpdesk, realtimeMode, setChat, textColor, theme, help }, ref) => {
    return (
        <div className="h-[670px] w-[450px] flex flex-col bg-white rounded-xl mr-[80px] border-[1px] overflow-hidden">
          <div className="flex justify-between px-4 pt-4">
             <div className="flex gap-2">
               <Avatar className="w-20 h-20">
                  <AvatarImage src="https://github.com/shadcnui.png" alt="@shadcn"/>
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>
               <div className="flex items-start flex-col">
                 <h3 className="text-lg font-bold leading-none">
                     Sales Rep - Chatbot
                 </h3>
                 <p className="text-sm">
                   {domainName.split('.com')[0]}
                 </p>
                 {realtimeMode?.mode && (
                    <RealTime setChats={setChat} chatRoomId={realtimeMode.chatroom}/>
                 )}
               </div>
             </div>
             <div className="relative w-16 h-16">
                <img src="/images/prop-user.png" className="w-full h-full object-contain" alt="users"/>
             </div>
          </div>
        </div>
    )
})

export default BotWindow
BotWindow.displayName = 'BotWindow'