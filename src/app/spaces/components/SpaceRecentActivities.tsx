import { ScrollArea } from "@/components/ui/scroll-area"

const SpaceRecentActivities = () => {
    return (
        <div className="space-y-4 p-4">
            <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                    {activities.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className={`w-2 h-2 mt-2 rounded-full ${getActivityColor(activity.type)}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium">{activity.description}</p>
                                <p className="text-xs">
                                    {formatTimeAgo(activity.timestamp)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

export default SpaceRecentActivities

function getActivityColor(type: string) {
    switch (type) {
        case "post":
            return "bg-blue-500"
        case "comment":
            return "bg-green-500"
        case "status":
            return "bg-yellow-500"
        default:
            return "bg-gray-500"
    }
}

function formatTimeAgo(timestap: string) {
    console.log(timestap)
    // Implement a function to format the timestamp as a relative time
    // e.g., "2 hours ago", "5 minutes ago", etc.
    return "2 hours ago" // Placeholder
}

const activities = [
    { type: "post", description: "New bug reported: 'App crashes on startup'", timestamp: "2023-05-15T14:30:00Z" },
    { type: "comment", description: "Alice commented on 'Add dark mode'", timestamp: "2023-05-15T13:45:00Z" },
    { type: "status", description: "Issue 'Login not working' marked as resolved", timestamp: "2023-05-15T12:15:00Z" },
    {
        type: "post",
        description: "New suggestion: 'Implement two-factor authentication'",
        timestamp: "2023-05-15T11:00:00Z",
    },
    {
        type: "comment",
        description: "Bob replied to 'Performance issues on mobile'",
        timestamp: "2023-05-15T10:30:00Z",
    },
]

