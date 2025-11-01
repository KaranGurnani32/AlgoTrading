import { ClientCard } from './ClientCard'
import { cn } from '@/lib/utils'
import type { Client } from '@/types/client'

interface ClientListProps {
  title: string
  clients: Client[]
  onClientClick: (client: Client) => void
  emptyMessage?: string
  variant?: 'available' | 'selected'
  icon?: React.ReactNode
}

export function ClientList({
  title,
  clients,
  onClientClick,
  emptyMessage = 'No clients available',
  variant = 'available',
  icon
}: ClientListProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className={cn(
        "flex items-center justify-between gap-2 pb-3 mb-3 border-b",
        "bg-background sticky top-0 z-10"
      )}>
        <div className="flex items-center gap-2">
          {icon && <div className="text-muted-foreground">{icon}</div>}
          <h2 className="font-semibold text-sm text-foreground">
            {title}
          </h2>
        </div>
        <span className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full",
          "bg-blue-100 text-xs font-medium text-blue-700"
        )}>
          {clients.length}
        </span>
      </div>

      {/* Client List */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {clients.length === 0 ? (
          <div className="flex items-center justify-center h-32 text-sm text-muted-foreground">
            {emptyMessage}
          </div>
        ) : (
          clients.map((client) => (
            <ClientCard
              key={client.id}
              client={client}
              onClick={onClientClick}
              variant={variant}
            />
          ))
        )}
      </div>
    </div>
  )
}
