import { useState } from 'react'
import { FormInput } from './FormInput'
import { DollarSign, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { TradingFormData } from '@/types/trading'

export function TradingForm() {
  const [formData, setFormData] = useState<TradingFormData>({
    investmentAmount: 0,
    orderUnits: 0,
    riskRewardRatio: 0,
    stopLoss: 0,
    target: 0,
    trailingStopLoss: 0
  })

  const handleInputChange = (name: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-2 pb-2 mb-3 border-b">
        <div className={cn(
          "flex h-7 w-7 items-center justify-center rounded-lg",
          "bg-gradient-to-br from-green-600 to-emerald-700"
        )}>
          <DollarSign className="h-4 w-4 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-sm text-foreground">Trading Parameters</h3>
          <p className="text-xs text-muted-foreground">Configure your trade settings</p>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-3">
        <FormInput
          label="Investment Amount"
          name="investmentAmount"
          value={formData.investmentAmount}
          onChange={handleInputChange}
          placeholder="0.00"
          suffix="₹"
          min={0}
          step={100}
          required
        />

        <FormInput
          label="Order Units"
          name="orderUnits"
          value={formData.orderUnits}
          onChange={handleInputChange}
          placeholder="0"
          suffix="units"
          min={0}
          step={1}
          required
        />

        <FormInput
          label="Risk/Reward Ratio"
          name="riskRewardRatio"
          value={formData.riskRewardRatio}
          onChange={handleInputChange}
          placeholder="0.00"
          suffix="%"
          min={0}
          step={0.1}
        />

        <FormInput
          label="Stop Loss"
          name="stopLoss"
          value={formData.stopLoss}
          onChange={handleInputChange}
          placeholder="0.00"
          suffix="₹"
          min={0}
          step={1}
        />

        <FormInput
          label="Target"
          name="target"
          value={formData.target}
          onChange={handleInputChange}
          placeholder="0.00"
          suffix="₹"
          min={0}
          step={1}
        />

        <FormInput
          label="Trailing Stop Loss"
          name="trailingStopLoss"
          value={formData.trailingStopLoss}
          onChange={handleInputChange}
          placeholder="0.00"
          suffix="%"
          min={0}
          step={0.1}
        />
      </div>

      {/* Calculate Button */}
      <div className="mt-3 pt-3 border-t">
        <button
          className={cn(
            "w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2",
            "bg-gradient-to-r from-blue-600 to-indigo-700 text-white",
            "font-medium text-sm",
            "hover:from-blue-700 hover:to-indigo-800",
            "transition-all duration-200 shadow-md hover:shadow-lg"
          )}
        >
          <TrendingUp className="h-4 w-4" />
          Calculate Trade
        </button>
      </div>
    </div>
  )
}
