import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Share2,
    Settings,
    ExternalLink,
} from "lucide-react"
import { Link } from "react-router-dom"

type PropTypes = {
    space: {
        id: number,
        name: string,
        url: string,
        createdAt: string,
        lastActivity: string,
    }
}

const SpaceHeader = ({ space }: PropTypes) => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                    <h1 className="text-3xl font-bold">{space.name}</h1>
                    <Link to={space.url}>
                        <Badge className="mt-1">{space.url}  <ExternalLink className="size-3 ml-2" /></Badge>
                    </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm"><Share2 className="h-3 w-3 mr-2" />Share</Button>
                    <Button variant="outline" size="sm"><Settings className="h-4 w-4" />Settings</Button>
                </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
                <span>Created on {new Date(space.createdAt).toLocaleDateString()}</span>
                <b className="mx-2">•</b>
                <span>Last activity: {new Date(space.lastActivity).toLocaleString()}</span>
            </div>
        </div>
    )
}

export default SpaceHeader
