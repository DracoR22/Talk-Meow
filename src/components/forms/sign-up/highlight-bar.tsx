'use client'

import { useAuthContextHook } from "@/context/use-auth-context"
import { cn } from "@/lib/utils"

const HighLightBar = () => {

    const { currentStep } = useAuthContextHook()

  return (
    <div className="grid grid-cols-3 gap-3">
       <div className={cn('rounded-full h-2 col-span-1', currentStep === 1 ? 'bg-blue-400' : 'bg-platinum')}/>
       <div className={cn('rounded-full h-2 col-span-1', currentStep === 2 ? 'bg-blue-400' : 'bg-platinum')}/>
       <div className={cn('rounded-full h-2 col-span-1', currentStep === 3 ? 'bg-blue-400' : 'bg-platinum')}/>
    </div>
  )
}

export default HighLightBar
