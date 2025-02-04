import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    ThumbsUp,
    MessageSquare,
    Search,
} from "lucide-react"

import { Image } from 'antd'
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

const SpacePosts = () => {

    const [filter, setFilter] = useState("all")
    const [sort, setSort] = useState("newest")
    const [search, setSearch] = useState("")


    const filteredAndSortedPosts = posts
        .filter((post) => filter === "all" || post.type === filter)
        .filter(
            (post) =>
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.content.toLowerCase().includes(search.toLowerCase()),
        )
        .sort((a, b) => {
            if (sort === "newest") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            if (sort === "oldest") return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            if (sort === "most-upvotes") return b.upvotes - a.upvotes
            return 0
        })


    return (
        <div className="col-span-2 p-4 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2">
                <div className="flex-1 relative">
                    <Input
                        placeholder="Search posts..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                <Select onValueChange={setFilter} defaultValue={filter}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="bug">Bugs</SelectItem>
                        <SelectItem value="suggestion">Suggestions</SelectItem>
                    </SelectContent>
                </Select>
                <Select onValueChange={setSort} defaultValue={sort}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="oldest">Oldest</SelectItem>
                        <SelectItem value="most-upvotes">Most Upvotes</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <ScrollArea className="h-screen">
                <div className="mr-5">
                    {filteredAndSortedPosts.map((post, index) => (
                        <div key={post.id} className={cn(index !== 0 ? "border-t-2" : "", "hover:bg-muted/50 cursor-pointer")}>
                            <div className="px-3 py-7">
                                <div className="flex flex-col md:flex-row md:items-center justify-between">
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-start justify-between gap-5">
                                            <h3 className="font-semibold">{post.title}</h3>
                                            <div className="mt-2 md:mt-0 flex items-center space-x-2">
                                                <Badge variant={post.type === "bug" ? "destructive" : "default"}>{post.type}</Badge>
                                                <Select defaultValue={post.status}>
                                                    <SelectTrigger className="w-[140px] h-fit bg-muted text-xs font-semibold px-4 py-0.5 rounded-full gap-2">
                                                        <SelectValue className="p-0 h-fit" placeholder="Status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="open">Open</SelectItem>
                                                        <SelectItem value="in-progress">In Progress</SelectItem>
                                                        <SelectItem value="resolved">Resolved</SelectItem>
                                                        <SelectItem value="closed">Closed</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        {
                                            post.screenshots
                                            && <div>
                                                <Image src={post.screenshots[0]} height={300} width={300} />
                                            </div>
                                        }

                                        <p className="text-sm text-muted-foreground mt-1">{post.content}</p>
                                    </div>

                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex space-x-4 text-sm text-muted-foreground">
                                        <span className="flex items-center">
                                            <ThumbsUp className="mr-1 h-4 w-4" /> {post.upvotes}
                                        </span>
                                        <span className="flex items-center">
                                            <MessageSquare className="mr-1 h-4 w-4" /> {post.comments}
                                        </span>
                                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

export default SpacePosts


const posts = [
    {
        id: 1,
        title: "Login button not working",
        content: "When I click on the login button, nothing happens. This is blocking me from accessing my account.",
        type: "bug",
        createdAt: "2023-05-14T10:00:00Z",
        upvotes: 15,
        comments: 3,
        status: "open",
    },
    {
        id: 2,
        title: "Add dark mode, and the current theme looks clumpsy",
        content: "It would be great to have a dark mode option for better visibility at night.",
        type: "suggestion",
        createdAt: "2023-05-13T14:30:00Z",
        upvotes: 42,
        comments: 7,
        status: "in-progress",
    },
    {
        id: 3,
        title: "Performance issues on mobile",
        content: "The app is very slow on my Android phone. Please optimize for mobile.",
        type: "bug",
        createdAt: "2023-05-12T09:15:00Z",
        upvotes: 28,
        comments: 5,
        status: "open",
    },
    {
        id: 4,
        title: "Integrate with Google Calendar",
        content: "Adding Google Calendar integration would make scheduling much easier.",
        type: "suggestion",
        createdAt: "2023-05-11T16:45:00Z",
        upvotes: 37,
        comments: 4,
        status: "in-progress",
    },
    {
        id: 5,
        title: "Can't upload profile picture",
        content: "I'm getting an error every time I try to upload a new profile picture.",
        screenshots: ["https://www.branchcms.com/images/documentation/upload-images-files/choose-image-none.png"],
        type: "bug",
        createdAt: "2023-05-10T11:20:00Z",
        upvotes: 9,
        comments: 2,
        status: "in-progress",
    },
]
