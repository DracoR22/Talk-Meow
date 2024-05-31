import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs"

export const onGetSubscriptionPlan = async () => {
  try {
     const user = await currentUser()

     if (!user) return

     const plan = await client.user.findUnique({
        where: {
            clerkId: user.id
        },
        select: {
            subscription: {
                select: {
                    plan: true
                }
            }
        }
     })

     if (plan) {
        return plan.subscription?.plan
     }
  } catch (error) {
    console.log(error)
  }
}

export const onGetAllAccountDomains = async () => {
 const user = await currentUser()
}