import { User, Mail, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Client } from '@/types/client'

interface ClientCardProps {
  client: Client
  onClick: (client: Client) => void
  isSelectable?: boolean
  variant?: 'available' | 'selected'
}

export function ClientCard({
  client,
  onClick,
  isSelectable = true,
  variant = 'available'
}: ClientCardProps) {
  const handleClick = () => {
    if (isSelectable) {
      onClick(client)
    }
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "group relative flex items-center gap-3 rounded-lg border p-3",
        "transition-all duration-200",
        isSelectable && "cursor-pointer hover:border-blue-500 hover:bg-blue-50/50",
        variant === 'selected' && "bg-blue-50 border-blue-200",
        !isSelectable && "opacity-50 cursor-not-allowed"
      )}
    >
      {/* Avatar */}
      <div className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
        "bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
      )}>
        {client.avatar ? (
          <img
            src={client.avatar}
            alt={client.name}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <User className="h-5 w-5" />
        )}
      </div>

      {/* Client Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-sm text-foreground truncate">
            {client.name}
          </h3>
          <Circle
            className={cn(
              "h-2 w-2 shrink-0",
              client.status === 'active' ? "fill-green-500 text-green-500" : "fill-gray-400 text-gray-400"
            )}
          />
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Mail className="h-3 w-3" />
          <span className="truncate">{client.email}</span>
        </div>
      </div>

      {/* Hover Indicator */}
      {isSelectable && (
        <div className={cn(
          "shrink-0 text-muted-foreground opacity-0 transition-opacity",
          "group-hover:opacity-100"
        )}>
          <Circle className="h-4 w-4" />
        </div>
      )}
    </div>
  )
}
