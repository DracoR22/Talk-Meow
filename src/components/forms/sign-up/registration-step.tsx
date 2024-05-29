'use client'

import { useAuthContextHook } from '@/context/use-auth-context'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import TypeSelectionForm from './type-selection-form'
import dynamic from 'next/dynamic'
import { Spinner } from '@/components/spinner'

const DetailForm = dynamic(() => import('./account-details-form'), {
  ssr: false,
  //@ts-ignore
  loading: Spinner,
})

const RegistrationFormStep = () => {

    const { register, formState: { errors }, setValue } = useFormContext()

    const { currentStep } = useAuthContextHook()

    const [onOTP, setOTP] = useState<string>('')
    const [onUserType, setOnUserType] = useState<'owner' | 'student'>('owner')

    setValue('otp', onOTP)

    switch(currentStep) {
        case 1: return (
            <TypeSelectionForm register={register} userType={onUserType} setUserType={setOnUserType}/>
        )
        case 2: return (
            <DetailForm errors={errors} register={register}/>
        )
        case 3:
    }

  return (
    <div>
      
    </div>
  )
}

export default RegistrationFormStep

