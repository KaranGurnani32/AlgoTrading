import { TradingForm } from './TradingForm'
import { ConditionBuilder } from './ConditionBuilder'
import { StocksTable } from './StocksTable'
import { cn } from '@/lib/utils'
import { mockStocks } from '@/mock/stocks'

export function Dashboard() {
  return (
    <div className="flex flex-col h-full gap-4">
      {/* Top Section - Trading Form and Condition Builder */}
      <div className="flex gap-4">
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
