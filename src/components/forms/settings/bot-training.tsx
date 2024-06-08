import { HELP_DESK_TABS_MENU } from "@/constants/menu"
import TabsMenu from "../../tabs"
import { TabsContent } from "../../ui/tabs"
import HelpDesk from "./help-desk"
import FilterQuestions from "./filter-questions"

type Props = {
    id: string
}

const BotTrainingForm = ({ id }: Props) => {
  return (
    <div className="py-5 mb-10 flex flex-col gap-5 items-start">
      <div>
        <h2 className="font-bold text-2xl">Bot Training</h2>
        <p className="text-sm font-light">
          Set FAQ questions, create questions for capturing
          lead information and train your bot to act the
          way you want it to.
        </p>
      </div>
      <TabsMenu triggers={HELP_DESK_TABS_MENU}>
        <TabsContent value="help desk" className="w-full">
           <HelpDesk id={id}/>
        </TabsContent>
        <TabsContent value="questions">
           <FilterQuestions id={id}/>
        </TabsContent>
      </TabsMenu>
    </div>
  )
}

export default BotTrainingForm