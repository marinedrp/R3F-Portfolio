import { SpotLight } from "@react-three/drei"
import { useRef } from "react"
import { useFrame, useThree } from "react-three-fiber"
import { Vector3 } from "three"

function MovingSpot({ vec = new Vector3(), ...props }) {
    const light = useRef()
    const viewport = useThree((state) => state.viewport)
    useFrame((state) => {
      light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight ref={light} castShadow penumbra={1} distance={10} angle={0.55} attenuation={5} anglePower={8} intensity={1} {...props} />
  }

export default MovingSpot;