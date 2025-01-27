import React from 'react'
import { Play } from 'lucide-react'
import { BaseNodeProps } from './NodeTypes'

export function ButtonNode({ onChange }: BaseNodeProps) {
  return (
    <button 
      className="w-full h-full rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white shadow-md transition-colors"
      onPointerDown={(e) => {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation?.()
      }}
      onClick={() => onChange?.({ button: { clicked: true } })}
    >
      <Play size={24} className="ml-1" />
    </button>
  )
}