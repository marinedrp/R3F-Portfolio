import React from 'react'
import Frame from './Frame'

function Frames() {
  return (
    <>
    {/* Front */}
    <Frame position={[0.8, -7.6, 1]} />
    <Frame position={[-0.8, -7.6, 1]} />
    {/* Right */}
    <Frame position={[2.2, -7.6, 1.8]} rotation={[0, -Math.PI / 2.5, 0]} />
    {/* Left */}
    <Frame position={[-2, -7.6, 1.8]} rotation={[0, Math.PI / 2.5, 0]} />
    </>
  )
}

export default Frames