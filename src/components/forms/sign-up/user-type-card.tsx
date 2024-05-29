'use client'

import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { UserIcon } from "lucide-react"
import { FieldValues, UseFormRegister } from "react-hook-form"

type Props = {
    value: string
    title: string
    text: string
    register: UseFormRegister<FieldValues>
    userType: 'owner' | 'student'
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}

const UserTypeCard = ({ register, setUserType, text, title, userType, value }: Props) => {
  return (
    <Label htmlFor={value}>
      <Card className={cn('w-full cursor-pointer', userType === value && 'border-green-500')}>
        <CardContent className="flex justify-between p-2">
            <div className="flex items-center gap-3">
               <Card className={cn('flex justify-center p-3', userType === value && 'border-green-500')}>
                  <UserIcon size={30} className={cn(userType === value ? 'text-green-500' : 'text-gray-400')}/>
               </Card>
               <div>
                 <CardDescription className={cn("font-bold", userType === value ? 'text-green-500' : 'text-gray-400')}>{title}</CardDescription>
                 <CardDescription className="text-iridium">{text}</CardDescription>
               </div>
            </div>
            <div>
                {/* CHANGE THE USER TYPE STATE ON CLICK */}
                <div className={cn('w-4 h-4 rounded-full', userType === value ? 'bg-green-300' : 'bg-transparent')}/>
                <Input {...register('type', { onChange: (e) => setUserType(e.target.value)})} value={value} id={value} className="hidden" type="radio"/>
            </div>
        </CardContent>
      </Card>
    </Label>
  )
}

export default UserTypeCard
