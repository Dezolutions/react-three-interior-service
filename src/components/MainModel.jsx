import React from 'react'
import {BedroomStand, BathroomStand, KitchenStand, ComplexStand} from '../components/stands'


const MainModel = React.memo(({gltfObj, modelRef}) => {

  return (
    <group ref={modelRef}>
      <KitchenStand/>
      <BedroomStand/>
      <BathroomStand/>
      <ComplexStand/>
      <primitive object={gltfObj.scene}/>
    </group>
  )
})

export default MainModel