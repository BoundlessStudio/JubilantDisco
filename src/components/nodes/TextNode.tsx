import React from 'react'
import { BaseNodeProps } from './NodeTypes'

export function TextNode({ data, onChange }: BaseNodeProps) {
  return (
    <div className="flex flex-col p-3 gap-2">
      <textarea
        className="w-full h-20 p-2 text-sm border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Enter text..."
        value={data.text || ''}
        onChange={(e) => onChange?.({ text: e.target.value })}
      />
    </div>
  )
}