import Heading1 from "@/components/custom/Heading1"
import { Button } from "@/components/ui/button"
import { ArrowRight, Maximize } from "lucide-react"
import WebsiteCategory from "./components/WebsiteCategory"
import Heading2 from "@/components/custom/Heading2"
import Note from "@/components/custom/Note"
import WebsiteName from "./components/WebsiteName"
import { useState } from "react"
import HandleCreateSpace from "./components/HandleCreateSpace"

const CreateSpace = () => {

    const [activeTab, setActiveTab] = useState(0)

    const steps = [
        {
            id: 0,
            title: "First, tell us your website's name",
            description: "Enter the name of your website for which you want to create a space.",
            element: WebsiteName,
            nextButtonName: "Proceed to next step"
        },
        {
            id: 1,
            title: "Which category best describes your website?",
            description: "Select one or more categories that best fit your website. Please be specific.",
            element: WebsiteCategory,
            nextButtonName: "Done, Create Space"
        },
        {
            id: 2,
            title: "Creating space for your website",
            description: "We're setting up a space for your website. Once it's ready, users can view your site on FixIt and share their bugs and suggestions.",
            element: HandleCreateSpace,
            nextButtonName: "Done, Go to your Space"
        },
    ]

    const activeTabDetails = steps[activeTab]

    return (
        <div className="h-full w-full">
            <Heading1 className="flex items-center mt-20 text-center justify-center">
                <Maximize className="h-8 w-8 mr-5" />
                Create Space
            </Heading1>
            <div className="space-y-20 flex items-center justify-center flex-col">
                <div className="text-center">
                    <Heading2 className="mt-10">{activeTabDetails.title}</Heading2>
                    <Note className="w-2/3 mx-auto">{activeTabDetails.description}</Note>
                    <activeTabDetails.element className="mt-5" />
                </div>
                <Button onClick={() => setActiveTab((prev) => prev + 1)} className="rounded-full px-10" endIcon={<ArrowRight className="w-5 h-5" />} iconAnimation="slide" >
                    {activeTabDetails.nextButtonName}
                </Button>
            </div>
        </div>
    )
}

export default CreateSpace
