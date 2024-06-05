'use client'

import { Separator } from "@/components/ui/separator"
import { useSettings } from "@/hooks/settings/use-settings"
import DomainUpdate from "./domain-update"

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
          
       </div>
    </form>
  )
}

export default SettingsForm