'use client'

import { useChatBot } from "@/hooks/chatbot/use-chatbot"
import BotWindow from "./bot-window"
import { cn } from "@/lib/utils"
import { BotIcon } from "@/icons/bot-icon"

const AIChatBot = () => {

    const { botOpened, currentBot, errors, loading, messageWindowRef, onAiTyping, onChats,onOpenChatBot, onRealTime, onStartChatting, register,setOnChats } = useChatBot()

  return (
    <div className="h-screen flex flex-col justify-end items-end gap-4">
        {botOpened && (
        <BotWindow
          errors={errors}
          setChat={setOnChats}
          realtimeMode={onRealTime}
          helpdesk={currentBot?.helpdesk!}
          domainName={currentBot?.name!}
          ref={messageWindowRef}
          help={currentBot?.chatBot?.helpdesk}
          theme={currentBot?.chatBot?.background}
          textColor={currentBot?.chatBot?.textColor}
          chats={onChats}
          register={register}
          onChat={onStartChatting}
          onResponding={onAiTyping}
        />
      )}
       <div
        className={cn('rounded-full relative cursor-pointer shadow-md w-20 h-20 flex items-center justify-center bg-grandis',
          loading ? 'invisible' : 'visible'
        )}
        onClick={onOpenChatBot}
      >
        {currentBot?.chatBot?.icon ? (
          <img
            src={`https://ucarecdn.com/${currentBot.chatBot.icon}/`}
            alt="bot"
            className="h-full w-full"
          />
        ) : (
          <BotIcon/>
        )}
      </div>
    </div>
  )
}

export default AIChatBot