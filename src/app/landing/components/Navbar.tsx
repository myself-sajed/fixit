import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import siteLinks from "@/lib/siteLinks"
import { cn } from "@/lib/utils"
import { Wrench } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]


const Navbar = () => {

    return (
        <div className="my-5">
            <nav className="rounded-full max-w-3xl mx-auto">
                <div className=" px-4 py-3 text-foreground">
                    <div className="flex gap-2 md:items-center">
                        <div className="flex grow md:items-center">
                            <div
                                className="flex size-9 shrink-0 items-center justify-center rounded-full max-md:mt-0.5"
                                aria-hidden="true"
                            >
                                <Wrench className="opacity-80" size={20} strokeWidth={2} />
                            </div>
                            <div className="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
                                <div className="space-y-0.5">
                                    <p className="text-xl font-medium hero-font">FixIt</p>
                                </div>
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                    <li className="row-span-3">
                                                        <NavigationMenuLink asChild>
                                                            <a
                                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                                href="/"
                                                            >
                                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                                    shadcn/ui
                                                                </div>
                                                                <p className="text-sm leading-tight text-muted-foreground">
                                                                    Beautifully designed components that you can copy and
                                                                    paste into your apps. Accessible. Customizable. Open
                                                                    Source.
                                                                </p>
                                                            </a>
                                                        </NavigationMenuLink>
                                                    </li>
                                                    <ListItem href="/docs" title="Introduction">
                                                        Re-usable components built using Radix UI and Tailwind CSS.
                                                    </ListItem>
                                                    <ListItem href="/docs/installation" title="Installation">
                                                        How to install dependencies and structure your app.
                                                    </ListItem>
                                                    <ListItem href="/docs/primitives/typography" title="Typography">
                                                        Styles for headings, paragraphs, lists...etc
                                                    </ListItem>
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                    {components.map((component) => (
                                                        <ListItem
                                                            key={component.title}
                                                            title={component.title}
                                                            href={component.href}
                                                        >
                                                            {component.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <Link to="/docs">
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                    Documentation
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                                <div className="flex gap-3 max-md:flex-wrap">
                                    <Link to={siteLinks.login.href}>
                                        <Button variant="ghost" size="sm" className="text-sm">
                                            Login
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
