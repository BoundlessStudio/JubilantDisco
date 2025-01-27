import React from 'react'
import { BaseNodeProps } from './NodeTypes'

export function TimerNode({ data, onChange }: BaseNodeProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <input
        type="number"
        min="0"
        max="999"
        className="w-12 text-center text-lg font-medium bg-transparent border-none focus:outline-none focus:ring-0"
        value={data.timer?.duration || 0}
        onPointerDown={(e) => {
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation?.()
        }}
        onChange={(e) => {
          const value = Math.max(0, Math.min(999, parseInt(e.target.value) || 0))
          onChange?.({ timer: { duration: value } })
        }}
      />
    </div>
  )
}