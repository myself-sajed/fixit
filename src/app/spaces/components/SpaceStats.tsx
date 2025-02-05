import { cn } from "@/lib/utils"
import { Activity, Bug, CheckCircle, Lightbulb, LucideIcon } from "lucide-react"

type PropTypes = {
    spaceStats: {
        totalPosts: number;
        bugsReported: number;
        suggestions: number;
        activeUsers: number;
        resolvedIssues: number;
        avgResponseTime: number;
    }
}

const SpaceStats = ({ spaceStats }: PropTypes) => {
    return (
        <div className="grid grid-cols-2">
            <StatItem
                icon={Activity}
                label="Total Posts"
                value={spaceStats.totalPosts}
                color="text-blue-600"
                className="border-b border-r"
            />
            <StatItem
                icon={Bug}
                label="Bugs Reported"
                value={spaceStats.bugsReported}
                color="text-red-600"
                className="border-b"
            />
            <StatItem
                icon={Lightbulb}
                label="Suggestions"
                value={spaceStats.suggestions}
                color="text-yellow-600"
                className="border-r"
            />
            <StatItem
                icon={CheckCircle}
                label="Resolved Issues"
                value={spaceStats.resolvedIssues}
                color="text-green-600"
                className="border-r"
            />
        </div>
    )
}

export default SpaceStats


function StatItem({ icon: Icon, label, value, color, className }: { icon: LucideIcon, label: string, value: number | string, color: string, className?: string }) {
    return (
        <div className={cn("flex items-center space-x-5 py-2 px-5", className)}>
            <Icon className={`h-6 w-6 ${color}`} />
            <div>
                <p className="text-sm font-medium">{label}</p>
                <p className="font-bold text-2xl">{value}</p>
            </div>
        </div>
    )
}