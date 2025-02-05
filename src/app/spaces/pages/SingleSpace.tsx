

import SpaceContainer from "../components/SpaceContainer"
import SpaceChart from "../components/SpaceChart"
import SpaceStats from "../components/SpaceStats"
import SpacePosts from "../components/SpacePosts"
import SpaceContributors from "../components/SpaceContributors"
import SpaceRecentActivities from "../components/SpaceRecentActivities"
import { Activity, ChartBar, Layout, Users } from "lucide-react"
import SpaceHeader from "../components/SpaceHeader"
import BackAndTitle from "@/components/custom/BackAndTitle"

const SingleSpace = () => {

    const space = {
        id: 1,
        name: `Varno AI App`,
        url: `https://www.varno.ai`,
        createdAt: "2023-01-01T00:00:00Z",
        lastActivity: "2023-05-15T14:30:00Z",
        totalPosts: 156,
        bugsReported: 42,
        suggestions: 78,
        activeUsers: 89,
        resolvedIssues: 36,
        avgResponseTime: 4.5,
    }

    return (
        <div className="min-h-screen">
            <BackAndTitle title="Space Dashboard" />
            <div className="container mx-auto py-5 relative">

                {/* SPACE HEADER */}
                <SpaceHeader space={space} />

                <div className="grid gap-6 mt-8 md:grid-cols-12">
                    {/* CHART AND STATS */}
                    <div className="col-span-12">
                        <SpaceContainer Icon={ChartBar} title="Activity overview and stats" >
                            <div className="grid grid-cols-2">
                                <SpaceChart />
                                <SpaceStats spaceStats={space} />
                            </div>
                        </SpaceContainer>
                    </div>

                    {/* POSTS, CONTRIBUTORS AND RECENT ACTIVITIES */}
                    <div className="col-span-12 grid grid-cols-3 gap-5">
                        <SpaceContainer Icon={Layout} title="Posts" className="col-span-2">
                            <SpacePosts />
                        </SpaceContainer>
                        <div className="space-y-2">
                            <SpaceContainer Icon={Users} title="Top contributors">
                                <SpaceContributors />
                            </SpaceContainer>
                            <SpaceContainer Icon={Activity} title="Recent activities">
                                <SpaceRecentActivities />
                            </SpaceContainer>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleSpace