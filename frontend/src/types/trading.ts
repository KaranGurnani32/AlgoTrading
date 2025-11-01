export interface TradingFormData {
  investmentAmount: number
  orderUnits: number
  riskRewardRatio: number
  stopLoss: number
  target: number
  trailingStopLoss: number
}

export interface Condition {
  id: string
  field: string
  operator: string
  value: string | number
  type: 'metric' | 'pattern' | 'custom'
}

export interface ConditionGroup {
  id: string
  conditions: Condition[]
  logicalOperator: 'AND' | 'OR'
}
