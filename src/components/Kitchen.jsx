import React from 'react'
import {OrbitControls, ScrollControls} from '@react-three/drei/index'
import { Room } from './Room/Room'
import {useThree} from '@react-three/fiber'

const Kitchen = () => {
  const { camera, gl } = useThree();
  
  camera.position.set(-2,1,-8)
  return (
    <>
      <OrbitControls
        enabled={false}
        camera={camera}
        gl={gl}
        enableZoom={false}/>
      <ScrollControls pages={4} damping={1}>
        <Room/>
      </ScrollControls>
    </>
  )
}

export default Kitchen