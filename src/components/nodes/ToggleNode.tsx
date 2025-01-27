import React from 'react'
import { ToggleLeft } from 'lucide-react'
import { BaseNodeProps } from './NodeTypes'

export function ToggleNode({ data, onChange }: BaseNodeProps) {
  return (
    <button
      className={`w-full h-full rounded-full flex items-center justify-center shadow-md transition-colors ${
        data.toggle?.isOn ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
      }`}
      onPointerDown={(e) => {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation?.()
      }}
      onClick={() => onChange?.({ toggle: { isOn: !data.toggle?.isOn } })}
    >
      <ToggleLeft size={24} className="text-white" />
    </button>
  )
}