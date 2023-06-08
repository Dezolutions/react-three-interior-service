import React from 'react'
import {TextureLoader} from 'three'

const ComplexStand = () => {
  const marble = new TextureLoader().load('/textures/stands/complex-texture.jpg')
  return (
    <mesh rotation={[0, -0.79, 0]} position={[7.4, 1, 7.5]}>
      <boxGeometry args={[0.4,2,3]}/>
      <meshBasicMaterial map={marble}/>
    </mesh>
  )
}

export default ComplexStand