export interface Client {
  id: string
  name: string
  email: string
  status: 'active' | 'inactive'
  avatar?: string
}

export interface ClientSelectionState {
  availableClients: Client[]
  selectedClients: Client[]
}
