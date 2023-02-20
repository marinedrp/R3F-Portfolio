import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import { BoxGeometry, CircleGeometry } from 'three'

function Circle() {
  const { viewport } = useThree(state)
  // viewport = canvas in 3d units (meters)

  const ref = useRef()
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    ref.current.position.set(x, y, 0)
    ref.current.rotation.set(-y, x, 0)
  })

  return (
    <mesh ref={ref}>
    <CircleGeometry />
    <meshStandardMaterial  />
  </mesh>
  )
}

export default Circle