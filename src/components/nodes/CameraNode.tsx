import React, { useEffect, useRef, useState } from 'react'
import { Camera, RefreshCw } from 'lucide-react'

export function CameraNode() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const initializeCamera = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Check if getUserMedia is supported
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error('Camera access is not supported in this browser')
      }

      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (err: any) {
      console.error('Error accessing camera:', err)
      if (err.name === 'NotAllowedError') {
        setError('Camera access was denied. Click below to try again.')
      } else if (err.name === 'NotFoundError') {
        setError('No camera was found. Please connect a camera and try again.')
      } else if (err.name === 'NotReadableError') {
        setError('Camera is in use by another application. Please close other apps using the camera.')
      } else {
        setError(err.message || 'Unable to access camera. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    initializeCamera()

    return () => {
      const stream = videoRef.current?.srcObject as MediaStream
      stream?.getTracks().forEach(track => track.stop())
    }
  }, [])

  if (isLoading) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gray-50 text-gray-600">
        <Camera size={24} className="text-gray-400 animate-pulse" />
        <p className="text-sm text-center">Requesting camera access...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gray-50 text-gray-600 p-4">
        <Camera size={24} className="text-gray-400" />
        <p className="text-sm text-center">{error}</p>
        <button
          className="mt-2 px-4 py-2 flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 focus:outline-none"
          onClick={(e) => {
            e.stopPropagation()
            initializeCamera()
          }}
          onPointerDown={(e) => {
            e.stopPropagation()
            e.nativeEvent.stopImmediatePropagation?.()
          }}
        >
          <RefreshCw size={16} />
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="w-full h-full p-3">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover"
      />
    </div>
  )
}