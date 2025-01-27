export type NodeData = {
  instruction?: string
  text?: string
  image?: { url: string }
  camera?: string
  speech?: { audioUrl?: string }
  website?: string
  file?: { name: string, url: string }
  range?: { value: number }
  data?: any
  button?: { clicked?: boolean }
  toggle?: { isOn: boolean }
  condition?: { state: 'yes' | 'no' | 'maybe' }
  timer?: { duration: number }
  dialog?: { message: string }
  confirm?: { message: string }
  browser?: { code: string }
  terminal?: { output: string }
  form?: {
    data: any
    schema: any
    uiSchema: any
  }
}

export type BaseNodeProps = {
  data: NodeData
  onChange?: (data: NodeData) => void
}