import React from 'react'
import { BaseNodeProps } from './NodeTypes'

const states = ['yes', 'no', 'maybe'] as const
const stateColors = {
  yes: 'bg-green-500 hover:bg-green-600',
  no: 'bg-red-500 hover:bg-red-600',
  maybe: 'bg-yellow-500 hover:bg-yellow-600'
}

export function ConditionNode({ data, onChange }: BaseNodeProps) {
  const currentState = data.condition?.state || 'yes'
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const currentIndex = states.indexOf(currentState)
    const nextIndex = (currentIndex + 1) % states.length
    const nextState = states[nextIndex]
    
    onChange?.({ condition: { state: nextState } })
  }

  return (
    <button
      type="button"
      className={`w-full h-full rounded-full flex items-center justify-center shadow-md transition-colors ${stateColors[currentState]}`}
      onPointerDown={(e) => {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation?.()
      }}
      onClick={handleClick}
    >
      <span className="text-lg font-medium text-white capitalize select-none">
        {currentState}
      </span>
    </button>
  )
}