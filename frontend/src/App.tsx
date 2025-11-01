import './App.css'
import { Header } from './components/Header'
import { SidePanel } from './components/SidePanel'
import { Dashboard } from './components/Dashboard'
import { mockClients } from './mock/clients'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - Full Width */}
      <Header />

      {/* Main Layout - Side Panel + Dashboard */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Side Panel */}
        <SidePanel initialClients={mockClients} />

        {/* Main Content Area - Dashboard */}
        <main className="flex-1 p-4 overflow-hidden">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App
