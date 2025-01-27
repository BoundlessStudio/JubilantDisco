// NodeContainer.tsx
import * as React from 'react'
import { GripHorizontal, Lock, Play } from 'lucide-react'
import { useEditor } from '@tldraw/tldraw'
import { NODE_CONFIGS } from '../Nodes'  // wherever you define your NODE_CONFIGS
import type { TLBaseShape } from '@tldraw/tldraw'

interface NodeContainerProps {
  shape: TLBaseShape
  children: React.ReactNode
}

export function NodeContainer({ shape, children }: NodeContainerProps) {
  const editor = useEditor()

  // 1. Get the node’s config (isCircular, etc.)
  const config = NODE_CONFIGS[shape.props.nodeType]

  // 2. Possibly control which icons or buttons show
  // (In your original snippet, you had some logic to conditionally
  //  show lock/play based on nodeType, or shape.props.isLocked, etc.)
  const shouldShowLock = !config.locked  // or your custom logic
  const shouldShowPlay = config.play  // or your custom logic

  // 3. Helper to get the node’s icon
  const getNodeIcon = () => {
    const Icon = config.icon
    return <Icon size={14} className="text-gray-400" />
  }

  // 4. Render the layout
  return (
    <div
      className={`
        flex flex-col w-full h-full
        ${config.isCircular
          ? 'rounded-full border border-gray-200 shadow-sm bg-white/50 p-4'
          : 'bg-white border border-gray-300 rounded-md shadow-sm'
        }
        overflow-hidden pointer-events-none
      `}
    >
      {/* Header bar (for non-circular shapes) */}
      {!config.isCircular && (
        <div className="h-[28px] flex items-center justify-between px-2 bg-gray-50 border-b border-gray-300 pointer-events-auto">
          <div className="flex items-center gap-2">
            <GripHorizontal size={14} className="text-gray-400 cursor-move" />
            <div className="flex items-center gap-1.5">
              {getNodeIcon()}
              <span className="text-sm font-medium text-gray-700 capitalize">
                {shape.props.nodeType}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Lock button */}
            {shouldShowLock && (
              <button
                className="p-1 hover:bg-gray-200 rounded interactive-element"
                onPointerDown={(e) => {
                  e.stopPropagation()
                  e.nativeEvent.stopImmediatePropagation?.()
                }}
                onClick={() => {
                  editor.updateShape({
                    id: shape.id,
                    type: 'node',
                    props: {
                      ...shape.props,
                      isLocked: !shape.props.isLocked,
                    },
                  })
                }}
              >
                <Lock
                  size={14}
                  className={
                    shape.props.isLocked ? 'text-blue-500' : 'text-gray-400'
                  }
                />
              </button>
            )}
            {/* Play button */}
            {shouldShowPlay && (
              <button
                className="p-1 hover:bg-gray-200 rounded interactive-element"
                onPointerDown={(e) => {
                  e.stopPropagation()
                  e.nativeEvent.stopImmediatePropagation?.()
                }}
              >
                <Play size={14} className="text-gray-400" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Body Content */}
      <div className="flex-1 pointer-events-auto">
        {children}
      </div>
    </div>
  )
}
