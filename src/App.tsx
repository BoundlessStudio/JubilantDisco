import React from 'react'
import {
  Tldraw,
  // Shape base + container
  BaseBoxShapeUtil,
  TLBaseShape,
  HTMLContainer,
  // Editor hooks
  useEditor,
  // Utility to create unique shape ids
  createShapeId,
  // UI kit
  TldrawUiButton,
  TldrawUiPopover,
  TldrawUiPopoverTrigger,
  TldrawUiPopoverContent,
  // Overriding Tldraw’s UI
  TLUiOverrides,
  TLComponents,
  // Default Tldraw Toolbar
  DefaultToolbar,
  DefaultToolbarContent,
} from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'

// Icons from Lucide (optional)
import { Plus } from 'lucide-react'

import { NodeContainer } from './components/NodeContainer' 
import { NODE_CONFIGS } from './Nodes' 
  
/* ------------------------------------------------
  2. Custom Node Shape Util
  ------------------------------------------------ */
  export class CustomNodeUtil extends BaseBoxShapeUtil {
  static type = 'node'

  getDefaultProps() {
    return {
      w: 200,
      h: 100,
      text: 'New Node',
      nodeType: 'instruction',
      isLocked: false,
      data: {},
    }
  }

  component(shape: TLBaseShape) {
    const editor = this.editor
    const { nodeType, data } = shape.props
    const config = NODE_CONFIGS[nodeType]
    const NodeComponent = config?.component
    const Icon = config?.icon

    // Callback so child node can update its data
    const handleDataChange = (updatedData: any) => {
      editor.updateShapes([
        {
          id: shape.id,
          type: shape.type,
          props: {
            ...shape.props,
            data: {
              ...data,
              ...updatedData,
            },
          },
        },
      ])
    }

    // Render our wrapper around the actual NodeComponent
    return (
      <HTMLContainer
        id={shape.id}
        style={{
          width: shape.props.w,
          height: shape.props.h,
        }}
      >
        <NodeContainer shape={shape}>
          {NodeComponent ? (
            <NodeComponent data={data} onChange={handleDataChange} />
          ) : (
            config.isCircular ? (
              <div className="flex items-center justify-center w-full h-full text-sm text-gray-500">
                <Icon />
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-full text-sm text-gray-500">
                No component found for &quot;{nodeType}&quot; node
              </div>
            )
          )}
        </NodeContainer>
      </HTMLContainer>
    )
  }

  indicator(shape: TLBaseShape) {
    // Keep your shape’s indicator logic
    const config = NODE_CONFIGS[shape.props.nodeType]
    return config?.isCircular ? (
      <circle
        cx={shape.props.w / 2}
        cy={shape.props.h / 2}
        r={Math.min(shape.props.w, shape.props.h) / 2}
      />
    ) : (
      <rect width={shape.props.w} height={shape.props.h} />
    )
  }

  isAspectRatioLocked() {
    return true
  }
}

/* ------------------------------------------------
   3. The Popover Button in the Toolbar
   ------------------------------------------------ */
function NodeMenuPopover() {
  const editor = useEditor()

  const nodeTypes = Object.keys(NODE_CONFIGS).map((key) => ({ type: key, icon: NODE_CONFIGS[key].icon }))

  // Function to create a new shape on the canvas
  const addNode = (nodeType: string) => {
    const id = createShapeId()
    const config = NODE_CONFIGS[nodeType]
    const { x, y } = editor.getViewportScreenCenter()

    editor.createShape({
      id,
      type: 'node',
      x: x - config.w / 2,
      y: y - config.h / 2,
      props: {
        w: config.w,
        h: config.h,
        text: `${nodeType} Node`,
        nodeType,
        isLocked: false,
        data: {},
      },
    })
    

    // Automatically select the newly created node
    editor.select(id)
  }

  return (
    <TldrawUiPopover>
      {/* The trigger button in the toolbar */}
      <TldrawUiPopoverTrigger asChild>
        <TldrawUiButton title="Nodes">
          <Plus size={16} />
        </TldrawUiButton>
      </TldrawUiPopoverTrigger>

      {/* The popover content: list of node types */}
      <TldrawUiPopoverContent side="bottom" sideOffset={8}>
        <div className="flex flex-col gap-1 p-2">
          {nodeTypes.map(({ type, icon: Icon }) => (
            <button
              key={type}
              className="flex items-center gap-2 p-2 rounded-md text-sm hover:bg-gray-200"
              onClick={() => addNode(type)}
            >
              <Icon size={16} />
              {type}
            </button>
          ))}
        </div>
      </TldrawUiPopoverContent>
    </TldrawUiPopover>
  )
}

/* ------------------------------------------------
   4. Override Tldraw’s Toolbar
   ------------------------------------------------ */
const components: TLComponents = {
  Toolbar: (props) => {
    return (
      <DefaultToolbar {...props}>
        {/* Add our popover in the toolbar */}
        <NodeMenuPopover />

        {/* Keep the rest of the default toolbar items */}
        <DefaultToolbarContent />
      </DefaultToolbar>
    )
  },
}

/* ------------------------------------------------
   5. Optionally override Tldraw UI items
      (Here we aren’t adding a custom tool,
       so keep overrides minimal or empty)
   ------------------------------------------------ */
const uiOverrides: TLUiOverrides = {
  // No custom tools in this example
}

/* ------------------------------------------------
   6. Final App
   ------------------------------------------------ */
function App() {
  return (
    <div className="w-screen h-screen">
      <Tldraw
        // Register our custom shape
        shapeUtils={[CustomNodeUtil]}
        // Minimal overrides & custom toolbar
        overrides={uiOverrides}
        components={components}
      />
    </div>
  )
}

export default App
