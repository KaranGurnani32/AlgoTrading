import { useState } from 'react'
import { Plus, X, Sparkles, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Condition } from '@/types/trading'

const FIELD_OPTIONS = [
  { value: 'roce', label: 'ROCE' },
  { value: 'eps', label: 'EPS' },
  { value: 'pe_ratio', label: 'P/E Ratio' },
  { value: 'price', label: 'Stock Price' },
  { value: 'volume', label: 'Volume' },
  { value: 'candles', label: 'Candle Pattern' },
  { value: 'week_high', label: '52 Week High' }
]

const OPERATOR_OPTIONS = [
  { value: 'greater_than', label: 'Greater than' },
  { value: 'less_than', label: 'Less than' },
  { value: 'equal_to', label: 'Equal to' },
  { value: 'between', label: 'Between' }
]

export function ConditionBuilder() {
  const [conditions, setConditions] = useState<Condition[]>([])

  const addCondition = () => {
    const newCondition: Condition = {
      id: Date.now().toString(),
      field: '',
      operator: '',
      value: '',
      type: 'metric'
    }
    setConditions([...conditions, newCondition])
  }

  const removeCondition = (id: string) => {
    setConditions(conditions.filter(c => c.id !== id))
  }

  const updateCondition = (id: string, field: keyof Condition, value: any) => {
    setConditions(conditions.map(c =>
      c.id === id ? { ...c, [field]: value } : c
    ))
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-2 pb-2 mb-3 border-b">
        <div className={cn(
          "flex h-7 w-7 items-center justify-center rounded-lg",
          "bg-gradient-to-br from-purple-600 to-pink-700"
        )}>
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm text-foreground">Filter Conditions</h3>
          <p className="text-xs text-muted-foreground">Add conditions to filter stocks</p>
        </div>
        <button
          onClick={addCondition}
          className={cn(
            "flex items-center gap-1 rounded-lg px-3 py-1.5",
            "bg-blue-600 text-white text-xs font-medium",
            "hover:bg-blue-700 transition-colors"
          )}
        >
          <Plus className="h-3 w-3" />
          Add
        </button>
      </div>

      {/* Conditions List */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-2">
        {conditions.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-center">
            <Sparkles className="h-12 w-12 text-muted-foreground/50 mb-3" />
            <p className="text-sm text-muted-foreground">No conditions added yet</p>
            <p className="text-xs text-muted-foreground mt-1">Click "Add" to create a filter</p>
          </div>
        ) : (
          conditions.map((condition, index) => (
            <div
              key={condition.id}
              className={cn(
                "relative rounded-lg border border-border p-3",
                "bg-gradient-to-br from-white to-blue-50/30",
                "hover:border-blue-300 transition-all duration-200"
              )}
            >
              {/* Condition Number */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground">
                  Condition {index + 1}
                </span>
                <button
                  onClick={() => removeCondition(condition.id)}
                  className={cn(
                    "rounded p-1 text-muted-foreground",
                    "hover:bg-red-100 hover:text-red-600 transition-colors"
                  )}
                >
                  <X className="h-3 w-3" />
                </button>
              </div>

              {/* Field Selection */}
              <div className="space-y-2">
                <select
                  value={condition.field}
                  onChange={(e) => updateCondition(condition.id, 'field', e.target.value)}
                  className={cn(
                    "w-full rounded-md border border-input bg-background px-2 py-1.5",
                    "text-sm text-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500"
                  )}
                >
                  <option value="">Select field...</option>
                  {FIELD_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {/* Operator Selection */}
                <select
                  value={condition.operator}
                  onChange={(e) => updateCondition(condition.id, 'operator', e.target.value)}
                  className={cn(
                    "w-full rounded-md border border-input bg-background px-2 py-1.5",
                    "text-sm text-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500"
                  )}
                >
                  <option value="">Select operator...</option>
                  {OPERATOR_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {/* Value Input */}
                <input
                  type="text"
                  value={condition.value}
                  onChange={(e) => updateCondition(condition.id, 'value', e.target.value)}
                  placeholder="Enter value..."
                  className={cn(
                    "w-full rounded-md border border-input bg-background px-2 py-1.5",
                    "text-sm text-foreground placeholder:text-muted-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500"
                  )}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {conditions.length > 0 && (
        <div className="mt-3 pt-2 border-t">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-muted-foreground">Match:</span>
            <div className="flex gap-1">
              <button className="px-2 py-1 rounded bg-blue-100 text-blue-700 font-medium">
                ALL
              </button>
              <button className="px-2 py-1 rounded text-muted-foreground hover:bg-gray-100">
                ANY
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Apply Filters Button */}
      <div className="mt-4 pt-3 border-t">
        <button
          className={cn(
            "w-full flex items-center justify-center gap-3 rounded-lg px-6 py-3",
            "bg-gradient-to-r from-blue-600 to-indigo-700 text-white",
            "font-bold text-base shadow-xl",
            "hover:from-blue-700 hover:to-indigo-800",
            "hover:shadow-2xl hover:scale-[1.02]",
            "transition-all duration-200",
            "border-2 border-blue-400/30"
          )}
        >
          <TrendingUp className="h-5 w-5" />
          APPLY FILTERS
        </button>
      </div>
    </div>
  )
}
