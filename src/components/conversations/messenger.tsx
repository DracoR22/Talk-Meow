'use client'

import { useChatWindow } from "@/hooks/conversation/use-conversation"

const Messenger = () => {

    const { chatRoom, chats, loading, messageWindowRef, onHandleSentMessage, register } = useChatWindow()

  return (
    <div className="flex-1 flex flex-col h-0 relative">

    </div>
  )
}

export default Messenger