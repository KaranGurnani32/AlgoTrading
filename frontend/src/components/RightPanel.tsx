import { TradingForm } from './TradingForm'
import { ConditionBuilder } from './ConditionBuilder'
import { cn } from '@/lib/utils'

export function RightPanel() {
  return (
    <aside className={cn(
      "flex flex-col w-[500px] h-screen border-l bg-background",
      "shadow-lg"
    )}>
      {/* Top Section - Split into two blocks */}
      <div className="flex-1 flex border-b-2">
        {/* Left Block - Trading Form */}
        <div className="flex-1 p-4 border-r overflow-hidden">
          <TradingForm />
        </div>

        {/* Right Block - Condition Builder */}
        <div className="flex-1 p-4 overflow-hidden">
          <ConditionBuilder />
        </div>
      </div>

      {/* Middle Section - Placeholder */}
      <div className="h-48 border-b p-4 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="h-full rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">Middle Section</p>
            <p className="text-xs text-muted-foreground mt-1">Content placeholder</p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Placeholder */}
      <div className="h-48 p-4 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="h-full rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">Bottom Section</p>
            <p className="text-xs text-muted-foreground mt-1">Content placeholder</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
