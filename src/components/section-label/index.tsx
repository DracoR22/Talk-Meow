type Props = {
  label: string
  message: string
}

const Section = ({ label, message }: Props) => {
  return (
    <div>
      <p className="text-sm font-bold">{label}</p>
      <p className="text-sm font-light">{message}</p>
    </div>
  )
}

export default Section
