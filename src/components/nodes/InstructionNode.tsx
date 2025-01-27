// InstructionNode.tsx
import React from 'react'
import { BaseNodeProps } from './NodeTypes'

export function InstructionNode({ data, onChange }: BaseNodeProps) {
  return (
    <div className="flex flex-col p-3 gap-2">
      <textarea
        className="w-full h-20 p-2 text-sm border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Enter instructions..."
        value={data.instruction || ''}
        onChange={(e) => onChange?.({ instruction: e.target.value })}
        onPointerDown={(e) => {
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation?.()
        }}
        onPointerUp={(e) => {
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation?.()
        }}
        onPointerMove={(e) => {
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation?.()
        }}
      />
    </div>
  )
}
