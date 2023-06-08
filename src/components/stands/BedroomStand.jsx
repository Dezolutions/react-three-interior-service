import React from 'react'
import {TextureLoader} from 'three'

const BedroomStand = () => {
  const marble = new TextureLoader().load('/textures/stands/bedroom-texture.jpg')
  return (
    <mesh rotation={[0, 0.85, 0]} position={[-7,1,7.9]}>
      <boxGeometry args={[0.4,2,3]}/>
      <meshBasicMaterial map={marble}/>
    </mesh>
  )
}

export default BedroomStand