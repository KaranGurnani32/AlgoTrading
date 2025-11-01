import { TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Header() {
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b",
      "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    )}>
      <div className="container flex h-16 items-center px-4 md:px-8">
        <div className="flex items-center gap-3">
          <div className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg",
            "bg-gradient-to-br from-blue-600 to-indigo-700",
            "shadow-lg shadow-blue-500/50"
          )}>
            <TrendingUp className="h-6 w-6 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <h1 className={cn(
              "text-2xl font-bold tracking-tight",
              "bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"
            )}>
              ALGOTRADING
            </h1>
            <p className="text-xs text-muted-foreground">Intelligent Trading Solutions</p>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a
              href="#"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Strategies
            </a>
            <a
              href="#"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Analytics
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
