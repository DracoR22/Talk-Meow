import { onGetSubscriptionPlan } from "@/actions/settings"
import Section from "../section-label"

const BillingSettings = async () => {

    const plan = await onGetSubscriptionPlan()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
         <Section label="Billing settings" message="Add payment information, upgrade and modify your plan."/>
      </div>
    </div>
  )
}

export default BillingSettings
