import { ChatBotMessageProps } from "@/schemas/conversation-schema";
import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import RealTime from "./real-time";
import TabsMenu from "../tabs";
import { BOT_TABS_MENU } from "@/constants/menu";
import ChatIcon from "@/icons/chat-icon";
import { TabsContent } from "../ui/tabs";
import { Separator } from "../ui/separator";
import Bubble from "./bubble";
import { Responding } from "./responding";
import { Button } from "../ui/button";
import { PaperclipIcon, SendIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CardDescription, CardTitle } from "../ui/card";
import Accordion from "../accordion";

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
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
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
                <img src="http://localhost:3000/images/prop-user.png" className="w-full h-full object-contain" alt="users"/>
             </div>
          </div>
          <TabsMenu triggers={BOT_TABS_MENU} className="bg-transparent border-[1px] border-border m-2">
             <TabsContent value="chat">
                <Separator orientation="horizontal"/>
                <div style={{ background: theme || '', color: textColor || '' }}
                className="px-3 flex h-[400px] flex-col py-5 gap-3 chat-window overflow-y-auto" ref={ref}>
                   {chats.map((chat, i) => (
                    <Bubble key={i} message={chat}/>
                   ))}
                   {onResponding && <Responding/>}
                </div>
                <form onSubmit={onChat} className="flex p-3 py-1 flex-col flex-1 bg-porcelain">
                  <div className="flex justify-between">
                     <Input {...register('content')} placeholder="Type your message..." 
                     className="focus-visible:ring-offset-0 bg-porcelain rounded-none outline-none border-none"/>
                      <Button type="submit" className="mt-3">
                         <SendIcon/>
                      </Button>
                  </div>
                  <Label htmlFor="upload">
                    <PaperclipIcon/>
                    <Input type="file" id="upload" {...register('image')} className="hidden"/>
                  </Label>
                </form>
             </TabsContent>
             <TabsContent value="helpdesk">
            <div className="h-[485px] overflow-y-auto overflow-x-hidden p-4 flex flex-col gap-4">
              <div>
                <CardTitle>Help Desk</CardTitle>
                <CardDescription>
                  Browse from a list of questions people usually ask.
                </CardDescription>
              </div>
              <Separator orientation="horizontal" />

              {helpdesk.map((desk) => (
                <Accordion
                  key={desk.id}
                  trigger={desk.question}
                  content={desk.answer}
                />
              ))}
            </div>
          </TabsContent>
          </TabsMenu>
          <div className="flex justify-center ">
            <p className="text-gray-400 text-xs">Powered By Talk Meow</p>
          </div>
        </div>
    )
})

export default BotWindow
BotWindow.displayName = 'BotWindow'