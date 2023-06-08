/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.2 public/models/bathroom_interior/scene.gltf
Author: Akshaykhedkar97 (https://sketchfab.com/Akshaykhedkar97)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bathroom-interior-7609ef43ffc04cc280f1525ffdc6d89a
Title: Bathroom Interior
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bathroom(props) {
  const { nodes, materials } = useGLTF('models/bathroom_interior/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.ceramic_objects} position={[-1.937, 0.388, 0.838]} rotation={[0, -Math.PI / 2, 0]} scale={0.273} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.ceiling} position={[-0.621, 0.001, -0.602]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.lamp_cloth} position={[2.471, 1.686, 1.687]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1.235, 1.235, 1.235]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.lamp_metal} position={[2.471, 1.686, 1.687]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1.235, 1.235, 1.235]} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.bathroomceiling} position={[-1.47, 2.903, -1.078]} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.bathroom_wall} position={[-0.621, 0.001, -0.602]} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.shower_light} position={[-1.47, 2.903, -1.078]} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.showerpanel} position={[-1.47, 2.903, -1.078]} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.jetspray} position={[-2.346, 0.753, 0.877]} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.crome} position={[-1.175, 1.182, -1.876]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.faucethandle} position={[0.597, 0.655, -1.091]} rotation={[0, -0.003, 0]} scale={0.072} />
      <mesh geometry={nodes.Object_26.geometry} material={materials.dustbin} position={[2.096, 0.267, 1.659]} scale={[0.475, 0.912, 0.475]} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.toiletpaper} position={[-2.265, 0.28, 0.427]} rotation={[Math.PI / 2, 0, 0]} scale={[0.139, 0.195, 0.139]} />
      <mesh geometry={nodes.Object_30.geometry} material={materials.bathroom_light} position={[-1.475, 2.903, -0.511]} scale={0.094} />
      <mesh geometry={nodes.Object_32.geometry} material={materials.passage_light} position={[-1.249, 2.899, 0.926]} scale={0.219} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.window} position={[-2.434, 1.547, 0.98]} scale={0.717} />
      <mesh geometry={nodes.Object_36.geometry} material={materials.mirror_body} position={[2.471, 1.853, 0.902]} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.mirror_glass} position={[2.471, 1.853, 0.902]} />
      <mesh geometry={nodes.Object_40.geometry} material={materials.encloserglass} position={[-1.523, 1.252, -0.888]} />
      <mesh geometry={nodes.Object_42.geometry} material={materials.senclosure} position={[-1.475, 1.417, -0.147]} />
      <mesh geometry={nodes.Object_44.geometry} material={materials.towel01} position={[1.005, 0.775, -1.233]} rotation={[0, -0.802, 0]} scale={0.015} />
      <mesh geometry={nodes.Object_46.geometry} material={materials.handwash} position={[2.116, 0.251, 0.656]} rotation={[-Math.PI, 0.056, -Math.PI]} scale={0.025} />
      <mesh geometry={nodes.Object_48.geometry} material={materials.decoreplate} position={[1.657, 2.462, -0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.593} />
      <mesh geometry={nodes.Object_50.geometry} material={materials.towel02} position={[1.005, 0.775, -1.233]} rotation={[0, -0.802, 0]} scale={0.015} />
      <mesh geometry={nodes.Object_52.geometry} material={materials.shower_head} position={[-1.766, 1.298, -1.953]} rotation={[Math.PI / 2, 0, 0]} scale={0.147} />
      <mesh geometry={nodes.Object_54.geometry} material={materials.flowerpot} position={[-0.289, 0.756, -1.145]} rotation={[0, 1.561, 0]} scale={0.259} />
      <mesh geometry={nodes.Object_56.geometry} material={materials.plant} position={[2.332, 0.972, 1.646]} rotation={[Math.PI / 2, 0, 1.106]} scale={0.003} />
      <mesh geometry={nodes.Object_58.geometry} material={materials.floor} position={[0.618, 1.256, -0.159]} scale={0.781} />
      <mesh geometry={nodes.Object_60.geometry} material={materials.artisticwall} position={[0.248, 1.203, -1.357]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.054, 0.054, 0.054]} />
      <mesh geometry={nodes.Object_62.geometry} material={materials.vanitywall} position={[-0.621, 0.001, -0.602]} />
      <mesh geometry={nodes.Object_64.geometry} material={materials.vanitycounter} position={[2.206, 0.429, 0.915]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes.Object_66.geometry} material={materials.sidewall} position={[-0.621, 0.001, -0.602]} />
      <mesh geometry={nodes.Object_68.geometry} material={materials.towelroll} position={[2.243, 0.929, -0.012]} rotation={[-0.646, 0.09, 1.638]} scale={1.412} />
    </group>
  )
}

useGLTF.preload('models/bathroom_interior/scene.gltf')