import Image from 'next/image'
import * as React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

function NavBar() {
  return (
    <div className="flex gap-5 justify-between items-center px-7 py-1 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <div className='flex items-center'>
         <img src="/images/logo.png" alt="LOGO" sizes="100vw" style={{ width: '80px', height: 'auto',}} width={0} height={0}/>
         <h3 className="font-bold text-2xl text-iridium">Talk Meow</h3>
        </div>
      </div>
      <div className="gap-5 justify-between self-stretch my-auto leading-5 text-neutral-700 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        <div className='flex items-center gap-5'>
        <p>Blog</p>
        <p>Pricing</p>
        </div>

        <div className='border-r '/>

       <Button asChild>
         <Link href={'/auth/sign-up'}>
           Get Started for Free
         </Link>
       </Button>

       <Button asChild variant={'outline'}>
          <Link href={'/auth/sign-in'}>
             Login
          </Link>
       </Button>
      </div>
    </div>
  )
}

export default NavBar