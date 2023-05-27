import React from 'react'
import {Canvas} from '@react-three/fiber'
import Kitchen from './components/Kitchen'

const Home = () => {
  return (
    <div>
      <Canvas>
        <ambientLight/>
        <pointLight position={[10,10,10]}/>
        <Kitchen/>
      </Canvas>
    </div>
  )
}

export default Home