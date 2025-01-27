import React from 'react'
import { BaseNodeProps } from './NodeTypes'

export function SpeechNode({ data }: BaseNodeProps) {
  return (
    <audio
      controls
      className="w-full p-3"
      src={data.speech?.audioUrl}
    >
      Your browser does not support the audio element.
    </audio>
  )
}