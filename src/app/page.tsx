import NavBar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import StarIcon from '@/icons/star-icon'
import { UserButton } from '@clerk/nextjs'
import { ArrowRightIcon, Star } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  return (
    <main>
       <NavBar/>
       <section className='flex items-center justify-center flex-col mt-[80px] gap-4'>
          <span className='text-green-500 bg-green-500/20 px-4 py-2 rounded-full text-sm'>
             The #1 AI Chatbot for Customer Support
          </span>
          <h1 className='text-6xl font-extrabold leading-normal'>
            Automate Your Customer <br /> Support Work With <span className='bg-primary text-white dark:text-black p-2 rounded-2xl'><StarIcon/> AI</span>
          </h1>
          <p className='font-medium text-muted-foreground text-center text-lg mt-2'>
            Build an AI chatbot to take care of 85% of your customer questions automatically. <br /> 
            Train it with your knowledge base and add it to your site in minutes.
          </p>

          <Button className='mt-1'>
            Build your chatbot <ArrowRightIcon/>
          </Button>
          <p className='text-muted-foreground'>No credit card required</p>

          <div className='flex items-center mt-2'>
            <img src="/avatars/15.png" alt="user1" className='rounded-full h-12 w-12 border-2 border-white'/>
            <img src="/avatars/16.png" alt="user1" className='rounded-full h-12 w-12 border-2 border-white -ml-4'/>
            <img src="/avatars/17.png" alt="user1" className='rounded-full h-12 w-12 border-2 border-white -ml-4'/>
            <img src="/avatars/18.png" alt="user1" className='rounded-full h-12 w-12 border-2 border-white -ml-4'/>

            <div className='flex items-center gap-x-1 ml-4'>
              <Star className='text-yellow-500 fill-yellow-500'/>
              <Star className='text-yellow-500 fill-yellow-500'/>
              <Star className='text-yellow-500 fill-yellow-500'/>
              <Star className='text-yellow-500 fill-yellow-500'/>
              <Star className='text-yellow-500 fill-yellow-500'/>
            </div>
          </div>

          <p className='text-muted-foreground'>
            Trusted by 200+ companies everyday
          </p>
       </section>
    </main>
  )
}

export default HomePage
