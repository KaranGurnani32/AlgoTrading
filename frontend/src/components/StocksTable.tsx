import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Stock } from '@/types/stock'

interface StocksTableProps {
  stocks: Stock[]
}

export function StocksTable({ stocks }: StocksTableProps) {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(num)
  }

  const formatCurrency = (num: number) => {
    return `₹${formatNumber(num)}`
  }

  const formatMarketCap = (num: number) => {
    const crore = num / 10000000
    if (crore >= 100000) {
      return `₹${(crore / 100000).toFixed(2)}L Cr`
    }
    return `₹${crore.toFixed(2)} Cr`
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b">
        <div className="flex items-center gap-2">
          <div className={cn(
            "flex h-7 w-7 items-center justify-center rounded-lg",
            "bg-gradient-to-br from-indigo-600 to-blue-700"
          )}>
            <BarChart3 className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-foreground">Filtered Stocks</h3>
            <p className="text-xs text-muted-foreground">Stocks matching your conditions</p>
          </div>
        </div>
        <div className={cn(
          "flex items-center gap-2 px-3 py-1 rounded-full",
          "bg-blue-100 text-blue-700"
        )}>
          <span className="text-xs font-medium">{stocks.length} Results</span>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-muted/50 backdrop-blur z-10">
            <tr className="border-b">
              <th className="text-left py-2 px-3 font-semibold text-xs text-muted-foreground">Symbol</th>
              <th className="text-left py-2 px-3 font-semibold text-xs text-muted-foreground">Name</th>
              <th className="text-right py-2 px-3 font-semibold text-xs text-muted-foreground">Price</th>
              <th className="text-right py-2 px-3 font-semibold text-xs text-muted-foreground">Change</th>
              <th className="text-right py-2 px-3 font-semibold text-xs text-muted-foreground">Volume</th>
              <th className="text-right py-2 px-3 font-semibold text-xs text-muted-foreground">Market Cap</th>
              <th className="text-right py-2 px-3 font-semibold text-xs text-muted-foreground">P/E</th>
              <th className="text-right py-2 px-3 font-semibold text-xs text-muted-foreground">EPS</th>
              <th className="text-right py-2 px-3 font-semibold text-xs text-muted-foreground">ROCE %</th>
              <th className="text-left py-2 px-3 font-semibold text-xs text-muted-foreground">Sector</th>
            </tr>
          </thead>
          <tbody>
            {stocks.length === 0 ? (
              <tr>
                <td colSpan={10} className="text-center py-12">
                  <div className="flex flex-col items-center gap-2">
                    <BarChart3 className="h-12 w-12 text-muted-foreground/50" />
                    <p className="text-sm text-muted-foreground">No stocks match your conditions</p>
                    <p className="text-xs text-muted-foreground">Try adjusting your filters</p>
                  </div>
                </td>
              </tr>
            ) : (
              stocks.map((stock) => (
                <tr
                  key={stock.id}
                  className={cn(
                    "border-b hover:bg-blue-50/50 transition-colors cursor-pointer"
                  )}
                >
                  {/* Symbol */}
                  <td className="py-2.5 px-3">
                    <span className="font-semibold text-foreground">{stock.symbol}</span>
                  </td>

                  {/* Name */}
                  <td className="py-2.5 px-3">
                    <span className="text-muted-foreground">{stock.name}</span>
                  </td>

                  {/* Price */}
                  <td className="py-2.5 px-3 text-right">
                    <span className="font-medium text-foreground">{formatCurrency(stock.price)}</span>
                  </td>

                  {/* Change */}
                  <td className="py-2.5 px-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      {stock.change >= 0 ? (
                        <>
                          <TrendingUp className="h-3 w-3 text-green-600" />
                          <span className="text-green-600 font-medium">
                            +{stock.changePercent.toFixed(2)}%
                          </span>
                        </>
                      ) : (
                        <>
                          <TrendingDown className="h-3 w-3 text-red-600" />
                          <span className="text-red-600 font-medium">
                            {stock.changePercent.toFixed(2)}%
                          </span>
                        </>
                      )}
                    </div>
                  </td>

                  {/* Volume */}
                  <td className="py-2.5 px-3 text-right text-muted-foreground">
                    {formatNumber(stock.volume)}
                  </td>

                  {/* Market Cap */}
                  <td className="py-2.5 px-3 text-right text-muted-foreground">
                    {formatMarketCap(stock.marketCap)}
                  </td>

                  {/* P/E */}
                  <td className="py-2.5 px-3 text-right text-muted-foreground">
                    {stock.pe.toFixed(1)}
                  </td>

                  {/* EPS */}
                  <td className="py-2.5 px-3 text-right text-muted-foreground">
                    ₹{stock.eps.toFixed(2)}
                  </td>

                  {/* ROCE */}
                  <td className="py-2.5 px-3 text-right">
                    <span className={cn(
                      "font-medium",
                      stock.roce >= 20 ? "text-green-600" :
                      stock.roce >= 15 ? "text-blue-600" :
                      "text-muted-foreground"
                    )}>
                      {stock.roce.toFixed(1)}%
                    </span>
                  </td>

                  {/* Sector */}
                  <td className="py-2.5 px-3">
                    <span className={cn(
                      "inline-flex px-2 py-0.5 rounded-full text-xs font-medium",
                      "bg-purple-100 text-purple-700"
                    )}>
                      {stock.sector}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
