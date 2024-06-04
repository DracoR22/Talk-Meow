'use client'

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
  return (
    <div>SettingsForm</div>
  )
}

export default SettingsForm