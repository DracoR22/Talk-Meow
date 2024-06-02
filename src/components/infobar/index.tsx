import React from 'react'
import { Card } from '../ui/card'
import { HeadphonesIcon, StarIcon, TrashIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import BreadCrumb from './bread-crumb'

const InfoBar = () => {
  return (
    <div className='flex w-full justify-between items-center py-1 mb-8'>
      <BreadCrumb/>
      <div className='flex gap-3 items-center'>
        <div>
            <Card className='rounded-xl flex gap-3 py-3 px-4 text-ghost dark:bg-neutral-800 dark:border-neutral-700'>
              <TrashIcon/>
              <StarIcon/>
            </Card>
        </div>
        <Avatar>
            <AvatarFallback className='bg-primary text-white dark:text-black'>
                <HeadphonesIcon/>
            </AvatarFallback>
        </Avatar>
        <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt=''/>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default InfoBar
