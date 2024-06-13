import { onDomainCustomerResponses, onGetAllDomainBookings } from "@/actions/appointment";
import PortalForm from "@/components/forms/portal/portal-form";

type Props = {
    params: { domainId: string; customerId: string }
}

const CustomerIdPage = async ({ params }: Props) => {

    const questions = await onDomainCustomerResponses(params.customerId)
    const bookings = await onGetAllDomainBookings(params.domainId)

    if (!questions) return null

  return (
    <PortalForm
      bookings={bookings}
      email={questions.email!}
      domainid={params.domainId}
      customerId={params.customerId}
      questions={questions.questions}
      type="Appointment"/>
  )
}

export default CustomerIdPage