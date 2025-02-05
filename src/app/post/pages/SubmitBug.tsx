import SpaceNameAndLink from "@/app/spaces/components/SpaceNameAndWebsite"
import BackAndTitle from "@/components/custom/BackAndTitle"
import SubmitBugForm from "../components/SubmitBugForm"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Note from "@/components/custom/Note"
import Heading5 from "@/components/custom/Heading5"

const SubmitBug = () => {

    const space = {
        id: 1,
        name: `Varno AI App`,
        url: `https://www.varno.ai`,
    }

    return (
        <div className="w-full">
            <BackAndTitle title="Submit bug, suggestion or an improvement" className="flex items-start justify-between" >
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
                        <AvatarFallback>SS</AvatarFallback>
                    </Avatar>
                    <div>
                        <Heading5 className="font-semibold text-sm">Shaikh Sajed Ahmed</Heading5>
                        <Note>digitalsajed@gmail.com</Note>
                    </div>
                </div>
            </BackAndTitle>
            <div className="flex items-center justify-center w-full">
                <SpaceNameAndLink name={space.name} website={space.url} className="my-5" />
            </div>
            <div className="max-w-xl mx-auto mt-5">
                <SubmitBugForm />
            </div>
        </div>
    )
}

export default SubmitBug
