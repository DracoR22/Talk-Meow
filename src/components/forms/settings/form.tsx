'use client'

import { Separator } from "@/components/ui/separator"
import { useSettings } from "@/hooks/settings/use-settings"
import DomainUpdate from "./domain-update"
import CodeSnippet from "./code-snippet"
import PremiumBadge from "@/icons/premium-badge"
import EditChatbot from "./edit-chatbot"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Loader } from "@/components/loader"

const WelcomeMessage = dynamic(() => import("./welcome-message").then((props) => props.default), {
  ssr: false
})

type Props = {
  id: string
  name: string
  plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
  chatBot: {
    id: string
    icon: string | null
    welcomeMessage: string | null
  } | null
}

const SettingsForm = ({ chatBot, id, name, plan }: Props) => {

  const { deleting, errors, loading, onDeleteDomain, onUpdateSettings, register } = useSettings(id)

  return (
    <form className="flex flex-col gap-8 pb-10" onSubmit={onUpdateSettings}>
       <div className="flex flex-col gap-3">
          <h2 className="font-bold text-2xl">Domain Settings</h2>
          <Separator orientation="horizontal"/>
          <DomainUpdate name={name} register={register} errors={errors}/>
          <CodeSnippet id={id}/>
       </div>
       <div className="flex flex-col gap-3 mt-5">
         <div className="flex gap-4 items-center">
           <h2 className="font-bold text-2xl">Chatbot Settings</h2>
           <div className="flex gap-1 bg-cream dark:bg-neutral-800 rounded-full px-3 py-1 text-xs items-center font-bold">
               <PremiumBadge />
               Premium
           </div>
         </div> 
         <Separator orientation="horizontal"/>
         <div className="grid md:grid-cols-2">
            <div className="col-span-1 flex flex-col gap-5 order-last md:order-first">
               <EditChatbot chatBot={chatBot} register={register} errors={errors}/>
               <WelcomeMessage message={chatBot?.welcomeMessage!} register={register} errors={errors}/>
            </div>
            <div className="col-span-1 relative">
                {/* TODO: CHANGE THIS */}
               <img src="/images/bot-ui.png" alt="bot-ui" className="sticky top-0" width={530} height={769}/>
            </div>
         </div>
       </div>
       <div className="flex gap-5 justify-end">
         <Button onClick={onDeleteDomain} variant="destructive" type="button" className="px-10 h-[50px]">
            <Loader loading={deleting}>Delete Domain</Loader>
         </Button>
         <Button type="submit" className="w-[100px] h-[50px]">
            <Loader loading={loading}>Save</Loader>
         </Button>
       </div>
    </form>
  )
}

export default SettingsForm