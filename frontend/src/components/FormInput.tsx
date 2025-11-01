import { cn } from '@/lib/utils'

interface FormInputProps {
  label: string
  name: string
  type?: 'text' | 'number'
  value: string | number
  onChange: (name: string, value: string | number) => void
  placeholder?: string
  suffix?: string
  min?: number
  step?: number
  required?: boolean
}

export function FormInput({
  label,
  name,
  type = 'number',
  value,
  onChange,
  placeholder,
  suffix,
  min,
  step,
  required = false
}: FormInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value
    onChange(name, newValue)
  }

  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          min={min}
          step={step}
          required={required}
          className={cn(
            "w-full rounded-lg border border-input bg-background px-3 py-2",
            "text-sm text-foreground placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            "transition-all duration-200",
            suffix && "pr-12"
          )}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            {suffix}
          </span>
        )}
      </div>
    </div>
  )
}
