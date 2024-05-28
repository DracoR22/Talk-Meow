import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"

type Props = {
    children: React.ReactNode
}

const Layout = async ({ children }: Props) => {

    const user = await currentUser()

    if (user) redirect('/')

  return (
    <div className="h-screen flex w-full justify-center">
     <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
       <div className="flex items-center">
        <img src="/images/logo.png" alt="logo" width={60} height={60}/>
        <h3 className="font-semibold text-xl">Talk Meow</h3>
       </div>
       {children}
     </div>
     <div className="hidden lg:flex flex-1 w-full max-h-full max-w-[4000px] overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
           Hi I&apos;m your AI powered sales assistant, Talk Meow!
        </h2>
        <p className="text-iridium md:text-sm mb-10">
           Talk Meow is capable of capturing lead information without a form...{' '}
           <br />
           something never done before
        </p>
        <img src="/images/app-ui.png" alt="app" sizes="30" className="absolute shrink-0 !w-[1600px] top-48" width={0} height={0}/>
     </div>
    </div>
  )
}

export default Layout
