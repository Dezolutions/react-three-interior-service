import React from 'react'
import {TextureLoader} from 'three'

const BathroomStand = () => {
  const marble = new TextureLoader().load('/textures/stands/bathroom-texture.jpg')
  return (
    <mesh rotation={[0, 1.6, 0]} position={[0.3, 1, 10.5]}>
      <boxGeometry args={[0.4,2,3]}/>
      <meshBasicMaterial map={marble}/>
    </mesh>
  )
}

export default BathroomStand