import React from 'react'
import { BaseNodeProps } from './NodeTypes'

export function TerminalNode({ data }: BaseNodeProps) {
  return (
    <div className="flex flex-col p-3 gap-2 h-full">
      <pre className="w-full h-full p-2 text-sm font-mono bg-gray-900 text-green-400 rounded overflow-auto">
        {data.terminal?.output || '> No output yet'}
      </pre>
    </div>
  )
}