import React from 'react'
import Frame from './Frame'

function Frames() {
  return (
    <>
    {/* Back */}
    <Frame position={[0.8, -7.6, 1.3]} />
    <Frame position={[-0.8, -7.6, 1.3]} />
    {/* Right */}
    <Frame position={[2.2, -7.6, 2.1]} rotation={[0, -Math.PI / 2.5, 0]} />
    {/* Left */}
    <Frame position={[-2.2, -7.6, 2.1]} rotation={[0, Math.PI / 2.5, 0]} />
    </>
  )
}

export default Frames