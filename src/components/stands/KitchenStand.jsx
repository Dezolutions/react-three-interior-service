import React from 'react'
import {TextureLoader} from 'three'

const KitchenStand = () => {
  const marble = new TextureLoader().load('/textures/stands/black-marble.jpg')
  
  return (
    <mesh rotation={[0, 0.1, 0]} position={[-10.5,1,1]}>
      <boxGeometry args={[0.4,2,3]}/>
      <meshBasicMaterial map={marble}/>
    </mesh>
  )
}

export default KitchenStand