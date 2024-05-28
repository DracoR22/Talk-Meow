import { FieldValues, UseFormRegister } from "react-hook-form"

type Props = {
    register: UseFormRegister<FieldValues>
    userType: 'owner' | 'student'
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}

const TypeSelectionForm = ({ register, setUserType, userType }: Props) => {



  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Create an account</h2>
      <p className="text-iridium md:text-sm">
         Tell us about yourself! What do you do? Let&apos;s tailor yourself
         <br /> experience so it best suits you.
      </p>
    </>
  )
}

export default TypeSelectionForm
