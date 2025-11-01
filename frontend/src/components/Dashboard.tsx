import { TradingForm } from './TradingForm'
import { ConditionBuilder } from './ConditionBuilder'
import { StocksTable } from './StocksTable'
import { TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { mockStocks } from '@/mock/stocks'

export function Dashboard() {
  return (
    <div className="flex flex-col h-full gap-4">
      {/* Top Section - Trading Form and Condition Builder */}
      <div className="flex gap-4 flex-[2]">
        {/* Left Block - Trading Form */}
        <div className={cn(
          "flex-1 rounded-lg border bg-card shadow-sm p-4",
          "overflow-hidden"
        )}>
          <TradingForm />
        </div>

        {/* Right Block - Condition Builder */}
        <div className={cn(
          "flex-1 rounded-lg border bg-card shadow-sm p-4",
          "overflow-hidden"
        )}>
          <ConditionBuilder />
        </div>
      </div>

      {/* Middle Section - Apply Button */}
      <div className="flex items-center justify-center py-3">
        <button
          className={cn(
            "flex items-center justify-center gap-3 rounded-lg px-12 py-4",
            "bg-gradient-to-r from-blue-600 to-indigo-700 text-white",
            "font-bold text-lg shadow-xl",
            "hover:from-blue-700 hover:to-indigo-800",
            "hover:shadow-2xl hover:scale-105",
            "transition-all duration-200",
            "border-2 border-blue-400/30"
          )}
        >
          <TrendingUp className="h-6 w-6" />
          APPLY FILTERS
        </button>
      </div>

      {/* Bottom Section - Stocks Table */}
      <div className={cn(
        "rounded-lg border bg-card shadow-sm p-4",
        "flex-1 overflow-hidden"
      )}>
        <StocksTable stocks={mockStocks} />
      </div>
    </div>
  )
}
