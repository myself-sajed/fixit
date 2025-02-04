import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const SpaceContributors = () => {
    return (
        <div className="space-y-4 p-4">
            {contributors.map((contributor, index) => (
                <div key={contributor.id} className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src={contributor.avatar} alt={contributor.name} />
                        <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{contributor.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {contributor.contributions} contributions
                        </p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100">
                        #{index + 1}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default SpaceContributors

const contributors = [
    { id: 1, name: "Alice Johnson", avatar: "/placeholder.svg?height=40&width=40", contributions: 47 },
    { id: 2, name: "Bob Smith", avatar: "/placeholder.svg?height=40&width=40", contributions: 36 },
    { id: 3, name: "Carol Williams", avatar: "/placeholder.svg?height=40&width=40", contributions: 28 },
    { id: 4, name: "David Brown", avatar: "/placeholder.svg?height=40&width=40", contributions: 19 },
    { id: 5, name: "Eva Davis", avatar: "/placeholder.svg?height=40&width=40", contributions: 15 },
]
