import React from 'react'
import { BaseNodeProps } from './NodeTypes'

export function ConfirmNode({ data, onChange }: BaseNodeProps) {
  return (
    <div className="w-full h-full p-3 flex items-center">
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter confirmation message..."
        value={data.confirm?.message || ''}
        onChange={(e) => onChange?.({ confirm: { message: e.target.value } })}
        onPointerDown={(e) => {
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation?.()
        }}
      />
    </div>
  )
}