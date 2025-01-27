import React from 'react'
import { BaseNodeProps } from './NodeTypes'

export function WebsiteNode({ data }: BaseNodeProps) {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://example.com"
        className="w-full h-full border-0"
        sandbox="allow-scripts allow-same-origin"
        title="Website preview"
      />
    </div>
  )
}