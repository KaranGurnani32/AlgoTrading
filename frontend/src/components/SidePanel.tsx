import { useState } from 'react'
import { Users, UserCheck, X } from 'lucide-react'
import { ClientList } from './ClientList'
import { cn } from '@/lib/utils'
import type { Client } from '@/types/client'

interface SidePanelProps {
  initialClients: Client[]
  onClose?: () => void
}

export function SidePanel({ initialClients, onClose }: SidePanelProps) {
  const [availableClients, setAvailableClients] = useState<Client[]>(initialClients)
  const [selectedClients, setSelectedClients] = useState<Client[]>([])

  const handleSelectClient = (client: Client) => {
    // Move client from available to selected
    setAvailableClients(prev => prev.filter(c => c.id !== client.id))
    setSelectedClients(prev => [...prev, client])
  }

  const handleDeselectClient = (client: Client) => {
    // Move client from selected back to available
    setSelectedClients(prev => prev.filter(c => c.id !== client.id))
    setAvailableClients(prev => [...prev, client])
  }

  return (
    <aside className={cn(
      "flex flex-col w-80 h-full border-r bg-background",
      "shadow-lg"
    )}>
      {/* Panel Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
        <div>
          <h2 className="text-lg font-bold text-foreground">Client Panel</h2>
          <p className="text-xs text-muted-foreground">
            Select clients to manage
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={cn(
              "rounded-lg p-2 text-muted-foreground",
              "hover:bg-white hover:text-foreground transition-colors"
            )}
            aria-label="Close panel"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Panel Content - Two Blocks */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Block - Available Clients */}
        <div className="flex-1 p-4 overflow-hidden flex flex-col border-b-2 border-dashed">
          <ClientList
            title="Available Clients"
            clients={availableClients}
            onClientClick={handleSelectClient}
            emptyMessage="All clients selected"
            variant="available"
            icon={<Users className="h-4 w-4" />}
          />
        </div>

        {/* Bottom Block - Selected Clients */}
        <div className="flex-1 p-4 overflow-hidden flex flex-col bg-blue-50/30">
          <ClientList
            title="Selected Clients"
            clients={selectedClients}
            onClientClick={handleDeselectClient}
            emptyMessage="No clients selected yet"
            variant="selected"
            icon={<UserCheck className="h-4 w-4" />}
          />
        </div>
      </div>

      {/* Panel Footer (Optional) */}
      <div className="px-4 py-3 border-t bg-muted/30">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Total: {initialClients.length}</span>
          <span>Selected: {selectedClients.length}</span>
        </div>
      </div>
    </aside>
  )
}
