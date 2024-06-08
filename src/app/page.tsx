'use client'

import NavBar from '@/components/landing/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { pricingCards } from '@/constants/landing-page'
import { useThemeMode } from '@/hooks/settings/use-settings'
import StarIcon from '@/icons/star-icon'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { ArrowRightIcon, CheckIcon, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {

  const { theme } = useThemeMode()
  return (
    <main>
       <NavBar/>
       <section className='flex items-center justify-center flex-col mt-[160px] gap-4'>
          <span className='text-green-500 border border-green-500 bg-green-500/20 px-4 py-2 rounded-full text-sm'>
             The #1 AI Chatbot for Customer Support
          </span>
          <h1 className='text-5xl font-extrabold leading-normal'>
            Automate Your Customer <br /> Support Work With <span className='bg-primary text-white dark:text-black p-2 rounded-2xl'><StarIcon color={'white'}/> AI</span>
          </h1>
          <h1 className='text-5xl font-extrabold leading-normal hidden dark:flex'>
            Automate Your Customer <br /> Support Work With <span className='bg-primary text-white dark:text-black p-2 rounded-2xl'><StarIcon color={'black'}/> AI</span>
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

       <section className='grid grid-cols-3 px-[120px] py-10 mt-[100px] bg-secondary'>
          <div>
            <h3 className='text-2xl font-bold text-center'>7 in 10</h3>
            <p className='text-lg text-muted-foreground mt-2 text-center'>
              of customer support interactions <br /> resolved through automation
            </p>
          </div>

          <div>
            <h3 className='text-2xl font-bold text-center'>96%</h3>
            <p className='text-lg text-muted-foreground mt-2 text-center'>
              of chatbot answers rated as <br /> helpful from visitors
            </p>
          </div>

          <div>
            <h3 className='text-2xl font-bold text-center'>28%</h3>
            <p className='text-lg text-muted-foreground mt-2 text-center'>
             in sales conversions from using AI for lead <br /> generation
            </p>
          </div>
       </section>

       <section className='mt-20'>
        <h3 className='text-3xl font-bold text-center'>
         <span className='text-muted-foreground'>Imagine a </span> 
         support agent <span className='text-muted-foreground'>that's</span> always <br /> on,
         never sleeps, <span className='text-muted-foreground'>and is </span>
         here to help <span className='text-muted-foreground'> your customers</span> anytime 
         <span className='text-muted-foreground'> of the day.</span> 
        </h3>
        {/* TODO: ADD SCREENSHOTS HERE */}
       </section>

       <section className='mt-[100px] flex justify-center items-center flex-col gap-4'>
         <h3 className='text-3xl text-center font-bold'>
            Choose what fits you right
         </h3>
         <p className='text-muted-foreground font-medium text-center'>
           Our straightforward pricing plans are tailored to meet your needs. If
           {" you're"} not <br />
           ready to commit you can get started for free.
         </p>
       </section>

       {/* PRICING CARDS */}
       <div className='flex justify-center gap-4 flex-wrap mt-14'>
          {pricingCards.map((card) => (
            <Card key={card.title} className={cn('w-[300px] flex flex-col justify-between', {
              'border-2 border-green-500 bg-green-500/10': card.title === 'Ultimate'
            })}>
               <CardHeader>
                 <CardTitle>{card.title}</CardTitle>
                 <CardDescription>
                   {pricingCards.find((c) => c.title === card.title)?.description}
                 </CardDescription>
               </CardHeader>
               <CardContent>
                 <span className='text-4xl font-bold'>{card.price}</span>
                 <span className='text-muted-foreground'>
                      <span>/ month</span>
                 </span>
               </CardContent>
               <CardFooter className='flex flex-col items-start gap-4'>
                   <div>
                     {card.features.map((f) => (
                      <div key={f} className='flex gap-2'>
                        <CheckIcon className={cn('text-muted-foreground text-sm', card.title === 'Ultimate' && 'text-green-500')}/>
                        <p className='text-sm font-medium text-muted-foreground'>{f}</p>
                      </div>
                     ))}
                   </div>
                   <Link href={`/dashboard?plan=${card.title}`} className='bg-primary p-2 w-full text-center font-bold rounded-md text-white dark:text-black hover:bg-primary/90 transition'>
                      Get Started
                   </Link>
               </CardFooter>
            </Card>
          ))}
       </div>

       <section className='mt-[100px] bg-primary mx-[100px] flex-col text-white dark:text-black text-center rounded-3xl p-14'>
          <h3 className='text-4xl font-bold'>
            Ready to Automate Customer Service?
          </h3>
          <p className='mt-6'>
           Start building your AI powered chatbot, embed it on your website and <br /> let it help you
           handle customer support — all within a few minutes.
          </p>
          <Button variant={'secondary'} className='mt-8'>
            Get Started for Free
          </Button>
          <p className='mt-3 text-xs pb-[10px]'>No credit card required</p>
       </section>
    </main>
  )
}

export default HomePage
