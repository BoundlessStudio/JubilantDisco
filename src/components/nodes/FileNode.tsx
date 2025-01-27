import React from 'react'
import { Upload } from 'lucide-react'
import { BaseNodeProps } from './NodeTypes'

export function FileNode({ data, onChange }: BaseNodeProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        onChange?.({ file: { name: file.name, url: reader.result as string } })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="w-full h-full p-3 relative">
      {data.file?.url ? (
        <div className="w-full h-full flex items-center justify-between gap-2 px-3">
          <span className="text-sm text-gray-700 truncate flex-1" title={data.file.name}>
            {data.file.name}
          </span>
          <label 
            className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full cursor-pointer transition-colors"
            onPointerDown={(e) => {
              e.stopPropagation()
              e.nativeEvent.stopImmediatePropagation?.()
            }}
          >
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <Upload size={16} className="text-gray-600" />
          </label>
        </div>
      ) : (
        <label 
          className="w-full h-full flex flex-col items-center justify-center gap-2 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
          onPointerDown={(e) => {
            e.stopPropagation()
            e.nativeEvent.stopImmediatePropagation?.()
          }}
        >
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <Upload size={24} className="text-gray-400" />
          <span className="text-sm text-gray-500">Upload File</span>
        </label>
      )}
    </div>
  )
}