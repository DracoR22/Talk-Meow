'use client'

import Section from "@/components/section-label"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { useHelpDesk } from "@/hooks/settings/use-settings"
import FormGenerator from "../form-generator"
import { Button } from "@/components/ui/button"

type Props = {
    id: string
}

const HelpDesk = ({ id }: Props) => {

    const { errors, isQuestions, loading, onSubmitQuestion, register } = useHelpDesk(id)

  return (
    <Card className="w-full grid-cols-1 lg:grid-cols-2">
        <CardContent className="p-6 border-r-[1px]">
           <CardTitle>Help Desk</CardTitle>
           <form onSubmit={onSubmitQuestion} className="flex flex-col gap-6 mt-10">
             <div className="flex flex-col gap-3">
                 <Section label="Question" message="Add a question that you believe is frequently asked."/>
                 <FormGenerator inputType="input" register={register} errors={errors} form="help-desk-form"
                 name="question" placeholder="Type your question" type="text"/>
             </div>
             <div className="flex flex-col gap-3">
                 <Section label="Answer to question" message="The answer for the question above."/>
                 <FormGenerator inputType="textarea" register={register} errors={errors} form="help-desk-form"
                 name="answer" placeholder="Type your answer" type="text" lines={5}/>
             </div>
             <Button type="submit">
                Create
             </Button>
           </form>
        </CardContent>
    </Card>
  )
}

export default HelpDesk