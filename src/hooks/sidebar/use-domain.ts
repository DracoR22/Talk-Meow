'use client'

import { onIntegrateDomain } from '@/actions/settings'
import { useToast } from '@/components/ui/use-toast'
import { upload } from '@/lib/upload-care'
import { AddDomainSchema } from '@/schemas/settings-shema'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

export const useDomain = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [isDomain, setIsDomain] = useState<string | undefined>(undefined)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FieldValues>({
        resolver: zodResolver(AddDomainSchema)
    })

    const pathname = usePathname()
    const router = useRouter()
    const { toast } = useToast()

    useEffect(() => {
        setIsDomain(pathname.split('/').pop())
    }, [pathname])

    const onAddDomain = handleSubmit(async (values: FieldValues) => {
        setLoading(true)

        const uploaded = await upload.uploadFile(values.image[0])
        const domain = await onIntegrateDomain(values.domain, uploaded.uuid)

        if (domain) {
            reset()
            setLoading(false)
            toast({
                title: domain.status === 200 ? 'Success' : 'Error',
                description: domain.message
            })

            router.refresh()
        }
    })

    return { register, onAddDomain, errors, loading, isDomain }
}