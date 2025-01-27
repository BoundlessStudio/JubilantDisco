import React from 'react'
import { Upload } from 'lucide-react'
import { BaseNodeProps } from './NodeTypes'

export function ImageNode({ data, onChange }: BaseNodeProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        onChange?.({ image: { url: reader.result as string } })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="w-full h-full p-3 relative">
      {data.image?.url ? (
        <>
          <img 
            src={data.image.url} 
            alt="Uploaded"
            className="w-full h-full object-cover"
          />
          <label 
            className="absolute bottom-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full shadow-md cursor-pointer transition-colors"
            onPointerDown={(e) => {
              e.stopPropagation()
              e.nativeEvent.stopImmediatePropagation?.()
            }}
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <Upload size={16} className="text-gray-600" />
          </label>
        </>
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
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <Upload size={24} className="text-gray-400" />
          <span className="text-sm text-gray-500">Upload Image</span>
        </label>
      )}
    </div>
  )
}