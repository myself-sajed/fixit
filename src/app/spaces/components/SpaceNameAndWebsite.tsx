import Heading1 from "@/components/custom/Heading1";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

type PropTypes = {
  name: string;
  website: string;
  className?: string
}

const SpaceNameAndLink = ({ name, website, className }: PropTypes) => {
  return (
    <div className={className}>
      <Heading1>{name}</Heading1>
      <Link to={website}>
        <Badge className="mt-1">{website}  <ExternalLink className="size-3 ml-2" /></Badge>
      </Link>
    </div>
  )
}

export default SpaceNameAndLink
