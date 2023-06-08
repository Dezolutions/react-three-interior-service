import React from 'react'
import {Canvas} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'
import {gsap} from 'gsap'
import {MainModel, CameraPosition} from '../components'

const coords = [0, -0.75, -1.5, -2.25, -3]
const Home = () => {
  const [loading, setLoading] = React.useState(true)
  const [gltfObj, setGltfObj] = React.useState()
  const modelRef = React.useRef()
  const [activeDot, setActiveDot] = React.useState(0)

  React.useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/models/main_hall/scene.gltf', (gltf) => {
      setGltfObj(gltf)
      setLoading(false); 
    });
  }, []);
  
  const onSlide = React.useCallback((positionY) => {
    gsap.to(modelRef.current.rotation, {
      duration: 0.6,
      y: positionY
    })
    setActiveDot(coords.indexOf(positionY))
  }, [coords, setActiveDot]);
  
  const onWheelEvent = (e) => {
    const currentPositionY = modelRef.current.rotation.y
    let newPositionY = currentPositionY
    e.deltaY > 0 
      ?
      // wheel down
      newPositionY = Math.max(currentPositionY - 0.75, -3)
      :
      //wheel up
      newPositionY = Math.min(currentPositionY + 0.75, 0)

    gsap.to(
      modelRef.current.rotation,
      {
        duration: 0.6,
        y: newPositionY
      }
    )
    setActiveDot(coords.indexOf(newPositionY))
  }

  return (
    <div onWheel={onWheelEvent} className='header'>
      {loading
        ? <p style={{ position: 'absolute', top: '50%', left: '50%'}}>LOADER</p>
        :
        <>
          <Canvas shadows>
            <CameraPosition/>
            <ambientLight intensity={1}/>
            <OrbitControls enableZoom={true}/>
            <MainModel modelRef={modelRef} gltfObj={gltfObj}/>
            <Model/>
          </Canvas>
          <div className='slider'>
            {coords.map((item, index) =>  
              <div key={index} className={activeDot === index ? 'slider-item active' : 'slider-item'} onClick={() => onSlide(item)}></div>
            )}
          </div>
          <div className='header-overlay' style={{ top: '30%', left: '50%'}}>
              {activeDot === 0 && <p className='header-title'>Elevated Living Concepts</p>}
          </div>
        </>
      }
    </div>
  )
}

export default Home