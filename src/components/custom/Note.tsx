import { cn } from '@/lib/utils'
import React from 'react'

const Note = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('text-muted-foreground text-xs', className)}>
            {children}
        </div>
    )
}

export default Note
