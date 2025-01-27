import React from 'react'
import { BaseNodeProps } from './NodeTypes'

export function RangeNode({ data, onChange }: BaseNodeProps) {
  return (
    <div className="flex items-center p-3 gap-2">
      <input
        type="range"
        className="flex-1"
        min={0}
        max={100}
        step={1}
        value={data.range?.value || 50}
        onChange={(e) => onChange?.({ range: { value: Number(e.target.value) } })}
      />
      <span className="text-sm text-gray-600 w-8 text-right">
        {data.range?.value || 50}
      </span>
    </div>
  )
}