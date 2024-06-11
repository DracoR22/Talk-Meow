import { Card } from "../ui/card"

type Props = {
    chatRoomId: string
    setChats: React.Dispatch<
      React.SetStateAction<
        {
          role: 'user' | 'assistant'
          content: string
          link?: string | undefined
        }[]
      >
    >
  }

const RealTime = ({ chatRoomId, setChats }: Props) => {

  return (
    <Card className="px-3 rounded-full py-1 bg-green-500 font-bold text-white text-sm">
        Real Time
    </Card>
  )
}

export default RealTime